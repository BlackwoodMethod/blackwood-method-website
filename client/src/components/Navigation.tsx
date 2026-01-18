import { Button } from "@/components/ui/button";
import { Menu, X, LayoutDashboard } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { supabase } from "@/lib/supabaseClient";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/store", label: "Store" },
    { href: "/demo", label: "Demo" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent cursor-pointer">
              Blackwood Method
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-blue-700 cursor-pointer ${
                    location === link.href
                      ? "text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            
            {session ? (
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link href="/signin">
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-700 hover:bg-blue-50">
                  Sign In
                </Button>
              </Link>
            )}
            
            <Link href="/contact">
              <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block py-2 text-sm font-medium transition-colors hover:text-blue-700 cursor-pointer ${
                      location === link.href
                        ? "text-blue-700"
                        : "text-gray-700"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              
              {session ? (
                <Link href="/dashboard">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-blue-700 border-blue-200 hover:bg-blue-50 mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link href="/signin">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-gray-700 hover:text-blue-700 hover:bg-blue-50 mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Button>
                </Link>
              )}
              
              <Link href="/contact">
                <Button
                  size="sm"
                  className="w-full bg-blue-700 hover:bg-blue-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

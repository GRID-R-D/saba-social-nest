import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Clock, Users, Phone, MessageCircle, Scale, Wallet, User, Baby, Stethoscope, Activity, Globe, Star, CheckCircle, Calendar, ArrowRight, Menu, X } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { icon: Heart, title: "Marriage Counselling", description: "Strengthen your relationship with expert guidance" },
    { icon: Users, title: "Dating Coach", description: "Navigate dating with confidence and clarity" },
    { icon: Heart, title: "Intimacy & Sex Advice", description: "Build deeper connections with professional support" },
    { icon: MessageCircle, title: "Relationship Advice", description: "Get personalized relationship guidance" },
    { icon: Scale, title: "Divorce Guidance", description: "Compassionate support through difficult transitions" },
    { icon: User, title: "Personal Therapy", description: "Individual support for mental wellness" },
    { icon: Stethoscope, title: "Nutritionist", description: "Holistic nutrition and wellness planning" },
    { icon: Activity, title: "Dermatology", description: "Professional skin health consultations" },
    { icon: Heart, title: "Queer Affirmative Therapy", description: "LGBTQ+ affirming mental health support" },
    { icon: Scale, title: "Lawyer (IP & Contract)", description: "Legal expertise for intellectual property" },
    { icon: Wallet, title: "Chartered Accountants", description: "Financial guidance and accounting services" },
    { icon: Baby, title: "Family Planning", description: "Support for growing families" }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Continuous Support",
      description: "Regular myth-busting, wellness insights, and correct information."
    },
    {
      icon: Phone,
      title: "Emergency Response",
      description: "Assistance within an hour if urgent support is needed."
    },
    {
      icon: Shield,
      title: "Holistic Wellness",
      description: "Guidance across life's storms—relationships, nutrition, intimacy, legal, therapy, skin, finance."
    },
    {
      icon: Users,
      title: "Expert Coaches",
      description: "Highly qualified, experienced, and empathetic professionals."
    },
    {
      icon: Heart,
      title: "Confidential & Non-Judgmental",
      description: "Your privacy and comfort come first."
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Available in multiple languages for your comfort."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Book a Session",
      description: "Choose from our range of personalized services"
    },
    {
      number: "02", 
      title: "Get Confirmation",
      description: "Receive appointment confirmation within 24 hours"
    },
    {
      number: "03",
      title: "Emergency Support",
      description: "Need urgent help? Get support within 1 hour!"
    },
    {
      number: "04",
      title: "Ongoing Care",
      description: "Access continuous support and follow-ups"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "SABA SOCIAL helped me navigate my relationship challenges with such compassion and expertise.",
      rating: 5
    },
    {
      name: "Ahmed K.",
      text: "The nutritionist completely transformed my approach to wellness. I feel amazing!",
      rating: 5
    },
    {
      name: "Priya S.",
      text: "Emergency support when I needed it most. Truly a lifesaver during difficult times.",
      rating: 5
    }
  ];

  const experts = [
    {
      name: "Dr. Emily Chen",
      specialty: "Marriage & Family Therapy",
      experience: "15+ years",
      approach: "Compassionate, evidence-based therapy"
    },
    {
      name: "Raj Patel",
      specialty: "Nutrition & Wellness",
      experience: "12+ years", 
      approach: "Holistic lifestyle transformation"
    },
    {
      name: "Dr. Sarah Williams",
      specialty: "Individual Therapy",
      experience: "10+ years",
      approach: "Person-centered therapeutic care"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-dark">SABA SOCIAL</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#experts" className="text-foreground hover:text-primary transition-colors font-medium">Experts</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="hero-secondary" size="sm">Join as Expert</Button>
              <Button variant="hero" size="sm">Book Session</Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
                <a href="#experts" className="text-foreground hover:text-primary transition-colors font-medium">Experts</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="hero-secondary" size="sm">Join as Expert</Button>
                  <Button variant="hero" size="sm">Book Session</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary-dark border-primary/20">
                <Heart className="w-4 h-4 mr-2" />
                Recognized by Hearts
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground mb-6">
                Face Life's Challenges{" "}
                <span className="text-primary">Gracefully</span>{" "}
                with SABA SOCIAL
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Experience one of the best wellness pampering from our experienced and reputed coaches for all your livelihood needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="xl" className="group">
                  Book Your Appointment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="hero-secondary" size="xl">
                  Learn How SABA Therapy Works?
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  Multiple Languages
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  24/7 Support
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Confidential & Safe
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <img 
                src={heroImage} 
                alt="Supportive community at SABA SOCIAL" 
                className="rounded-2xl shadow-heavy w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Brings You Here Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">What Brings You Here?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Are you seeking guidance in relationships, intimacy, nutrition, mental wellness, law, or finance? 
              SABA SOCIAL is your nest of supergood feel anchors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">Support available in multiple languages</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg">Book Session</Button>
              <Button variant="hero-secondary" size="lg">Learn More</Button>
              <Button variant="wellness" size="lg">Subscription Info</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SABA SOCIAL */}
      <section id="about" className="py-20 bg-gradient-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose SABA SOCIAL?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing comprehensive, compassionate care for every aspect of your wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-medium group-hover:shadow-heavy transition-all duration-300">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">How the Booking Process Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, straightforward steps to get the support you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl shadow-medium">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="mx-auto text-primary/30 w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Multilingual and accessible support throughout your journey</p>
            <Button variant="hero" size="xl">Start Your Journey</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people who found support and healing with SABA SOCIAL.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-medium hover:shadow-heavy transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent-warm text-accent-warm" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Verified Client</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Experts */}
      <section id="experts" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Connect With Our Experts</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team of qualified professionals is here to support you on your wellness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <Card key={index} className="shadow-medium hover:shadow-heavy transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 group-hover:scale-105 transition-transform">
                    {expert.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{expert.name}</h3>
                  <p className="text-primary font-medium mb-2">{expert.specialty}</p>
                  <p className="text-sm text-muted-foreground mb-4">{expert.experience} experience</p>
                  <p className="text-muted-foreground mb-6">{expert.approach}</p>
                  <Button variant="hero" size="sm" className="w-full">Book Session</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join as Expert */}
      <section className="py-20 bg-gradient-sage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Join SABA SOCIAL as an Expert</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Are you a qualified professional in therapy, nutrition, law, or other wellness fields? Join our community of experts.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Benefits for Experts:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Convenient: Consult remotely and connect with audiences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Flexible: Create your own appointment calendar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Personal Branding: Contact us for our branding programme</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">More Benefits:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Fast Payments: Payouts settled within a week</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Peer Community: Connected, supportive professional environment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Growth Support: Marketing and business development assistance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">Become an Anchor</Button>
            <Button variant="hero-secondary" size="xl">Contact Us to Learn More</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Wellness Journey?</h2>
          <p className="text-xl text-white/90 mb-12">
            Join thousands who have found support, healing, and growth with SABA SOCIAL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-secondary" size="xl" className="bg-white text-primary-dark hover:bg-white/90">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Session Now
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-dark">
              Explore Our Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">SABA SOCIAL</h3>
              <p className="text-white/80 mb-6 max-w-md">
                Nest of supergood feel anchors for modern life. Your journey to wellness starts here.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <MessageCircle className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Globe className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#experts" className="hover:text-white transition-colors">Experts</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Book Now</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Join as Expert</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 SABA SOCIAL. All rights reserved. | Terms & Conditions | Privacy Policy
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Badge variant="outline" className="border-white/30 text-white">
                Multilingual Support
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                24/7 Available
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

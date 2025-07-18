import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Clock, Users, Phone, MessageCircle, Scale, Wallet, User, Baby, Stethoscope, Activity, Globe, Star, CheckCircle, Calendar, ArrowRight, Menu, X, Sparkles, Zap, Award, BarChart3, Quote } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import therapyImage from "@/assets/therapy-session.jpg";
import expertTeamImage from "@/assets/expert-team.jpg";
import meditationImage from "@/assets/meditation-wellness.jpg";
import videoConsultationImage from "@/assets/video-consultation.jpg";
import marriageCounsellingImg from "@/assets/service-marriage-counselling.png";
import datingCoachImg from "@/assets/service-dating-coach.png";
import intimacyImg from "@/assets/service-intimacy.png";
import relationshipAdviceImg from "@/assets/service-relationship-advice.png";
import divorceGuidanceImg from "@/assets/service-divorce-guidance.png";
import personalTherapyImg from "@/assets/service-personal-therapy.png";
import nutritionistImg from "@/assets/service-nutritionist.png";
import dermatologyImg from "@/assets/service-dermatology.png";
import queerTherapyImg from "@/assets/service-queer-therapy.png";
import lawyerImg from "@/assets/service-lawyer.png";
import charteredAccountantImg from "@/assets/service-chartered-accountant.png";
import familyPlanningImg from "@/assets/service-family-planning.png";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { image: marriageCounsellingImg, title: "Marriage Counselling", description: "Strengthen your relationship with expert guidance" },
    { image: datingCoachImg, title: "Dating Coach", description: "Navigate dating with confidence and clarity" },
    { image: intimacyImg, title: "Intimacy & Sex Advice", description: "Build deeper connections with professional support" },
    { image: relationshipAdviceImg, title: "Relationship Advice", description: "Get personalized relationship guidance" },
    { image: divorceGuidanceImg, title: "Divorce Guidance", description: "Compassionate support through difficult transitions" },
    { image: personalTherapyImg, title: "Personal Therapy", description: "Individual support for mental wellness" },
    { image: nutritionistImg, title: "Nutritionist", description: "Holistic nutrition and wellness planning" },
    { image: dermatologyImg, title: "Dermatology", description: "Professional skin health consultations" },
    { image: queerTherapyImg, title: "Queer Affirmative Therapy", description: "LGBTQ+ affirming mental health support" },
    { image: lawyerImg, title: "Lawyer (IP & Contract)", description: "Legal expertise for intellectual property" },
    { image: charteredAccountantImg, title: "Chartered Accountants", description: "Financial guidance and accounting services" },
    { image: familyPlanningImg, title: "Family Planning", description: "Support for growing families" }
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
      {/* Floating Social CTA Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

        <style>{`
          @keyframes whatsapp-glow-outline {
            0%, 100% { box-shadow: 0 0 8px 2px #22c55e; }
            50% { box-shadow: 0 0 16px 4px #22c55e; }
          }
          .animate-whatsapp-glow-outline {
            animation: whatsapp-glow-outline 1.2s infinite;
          }
          @keyframes instagram-glow-outline {
            0%, 100% { box-shadow: 0 0 8px 2px #e1306c; }
            50% { box-shadow: 0 0 16px 4px #e1306c; }
          }
          .animate-instagram-glow-outline {
            animation: instagram-glow-outline 1.2s infinite;
          }
        `}</style>
        <a
          href="https://wa.me/918073286312" // SABA WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center px-4 py-2 rounded-full shadow-lg bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold text-base gap-2 relative animate-whatsapp-glow-outline"
        >
          <MessageCircle className="w-6 h-6" style={{ verticalAlign: 'middle' }} />
          WhatsApp Us
        </a>
        <a
          href="https://instagram.com/xabasocial" // SABA Instagram profile
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center px-4 py-2 rounded-full shadow-lg bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 hover:from-pink-600 hover:via-purple-600 hover:to-yellow-600 transition-colors text-white font-semibold text-base gap-2 relative animate-instagram-glow-outline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
          Follow on Instagram
        </a>
      </div>
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
              <Button variant="hero-secondary" size="sm" onClick={() => window.open("https://wa.me/918073286312", "_blank", "noopener,noreferrer")}>Join as Expert</Button>
              <Button variant="hero" size="sm" onClick={() => window.open("https://wa.me/918073286312", "_blank", "noopener,noreferrer")}>Book Session</Button>
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
              <Button
                variant="hero-secondary"
                size="sm"
                onClick={() => window.open("https://wa.me/918073286312", "_blank", "noopener,noreferrer")}
              >
                Join as Expert
              </Button>
              <Button variant="hero" size="sm" onClick={() => window.open("https://wa.me/918073286312", "_blank", "noopener,noreferrer")}  rel="noopener noreferrer">Book Session</Button>
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
                <Button variant="hero" size="xl" className="group" onClick={() => window.open("https://wa.me/918073286312", "_blank", "noopener,noreferrer")}>
                  Book Your Appointment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
      <section id="services" className="py-20 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-warm opacity-5 rounded-full -translate-y-40 -translate-x-40"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-purple opacity-8 rounded-full translate-y-32 translate-x-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-accent-purple mr-3" />
              <h2 className="text-4xl font-bold text-foreground">What Brings You Here?</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are among the rare wellness advocates globally who not only offer sessions but also maintain regular communication on our online platforms, sharing myth-busting insights and correcting misleading trends for your health and wellness!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              return (
                <Card key={index} className="group hover:shadow-colorful transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 overflow-hidden">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-24 h-24 rounded-2xl overflow-hidden mb-4 group-hover:scale-110 transition-transform shadow-medium">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-8 text-lg">Support available in multiple languages</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="warm" size="lg" onClick={() => window.open("https://wa.me/918073286312", "_blank", "noopener,noreferrer")}>Book Session</Button>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SABA SOCIAL */}
      <section id="about" className="py-20 bg-gradient-sage relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-purple opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-warm opacity-15 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="flex items-center mb-6">
                <Sparkles className="w-8 h-8 text-accent-warm mr-3" />
                <h2 className="text-4xl font-bold text-foreground">Why Choose SABA SOCIAL?</h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're committed to providing comprehensive, compassionate care for every aspect of your wellbeing. 
                Our unique approach combines professional expertise with genuine human connection.
              </p>
            </div>
            <div className="lg:ml-8">
              <img 
                src={therapyImage} 
                alt="Professional therapy session at SABA SOCIAL" 
                className="rounded-2xl shadow-heavy w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const gradients = ['gradient-warm', 'gradient-cool', 'gradient-purple', 'gradient-sunset', 'gradient-secondary', 'gradient-primary'];
              const gradient = gradients[index % gradients.length];
              
              return (
                <div key={index} className="text-center group">
                  <div className={`mx-auto w-20 h-20 bg-${gradient} rounded-full flex items-center justify-center mb-6 shadow-colorful group-hover:shadow-heavy group-hover:scale-110 transition-all duration-300`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-cool opacity-5 rounded-full -translate-y-48 -translate-x-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-warm opacity-10 rounded-full translate-y-40 translate-x-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="flex items-center mb-6">
                <Zap className="w-8 h-8 text-accent-orange mr-3" />
                <h2 className="text-4xl font-bold text-foreground">How the Booking Process Works</h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Simple, straightforward steps to get the support you need. Our streamlined process ensures you can 
                connect with the right expert quickly and easily.
              </p>
              
              <div className="space-y-6">
                {processSteps.map((step, index) => {
                  const colors = ['text-accent-warm', 'text-accent-blue', 'text-accent-purple', 'text-accent-orange'];
                  const bgColors = ['bg-gradient-warm', 'bg-gradient-cool', 'bg-gradient-purple', 'bg-gradient-sunset'];
                  
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${bgColors[index]} rounded-full flex items-center justify-center text-white font-bold shadow-colorful flex-shrink-0`}>
                        {step.number}
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold ${colors[index]} mb-2`}>{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="lg:ml-8">
              <img 
                src={videoConsultationImage} 
                alt="Video consultation with SABA SOCIAL expert" 
                className="rounded-2xl shadow-heavy w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">Multilingual and accessible support throughout your journey</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="sunset" size="xl">Start Your Journey</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Testimonials */}
      <section className="py-20 bg-gradient-to-br from-sage/5 to-teal/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              See how we've helped our <span className="text-amber-600">clients find lasting wellness</span>
            </h2>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Heart className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-5xl font-bold text-foreground mb-2">1000+</div>
              <div className="text-lg text-muted-foreground">Successful Sessions</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-5xl font-bold text-foreground mb-2">95%</div>
              <div className="text-lg text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Star className="w-8 h-8 text-amber-600 fill-amber-600" />
              </div>
              <div className="text-5xl font-bold text-foreground mb-2">4.9/5</div>
              <div className="text-lg text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>

          {/* Moving Testimonials */}
          <div className="overflow-hidden relative">
            <style>{`
              @keyframes saba-slider {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
            <div
              className="flex space-x-4 will-change-transform"
              style={{
                animation: 'saba-slider 18s linear infinite',
              }}
            >
              {[
                {
                  name: "Neeta, 35",
                  role: "Teacher",
                  text: "I was overwhelmed. Everything! They filtered meetings, and even planned chemistry was undeniable, allowing me to focus on connecting with someone special. We had a beautiful wedding!",
                  image: marriageCounsellingImg
                },
                {
                  name: "Priya, 32",
                  role: "Software Engineer",
                  text: "I met my husband through their service. They genuinely care about their clients. They filtered out the creeps and involved my parents, allowing me to focus on connecting with someone special.",
                  image: datingCoachImg
                },
                {
                  name: "Vikram, 36",
                  role: "University Lecturer",
                  text: "Tired of endless messages, I found this service. They understood my needs and filtered through profiles. One day, they found someone who shared my love for technology and career ambitions. We clicked instantly!",
                  image: personalTherapyImg
                },
                {
                  name: "Kamini, 29",
                  role: "Lawyer",
                  text: "I was skeptical about online matchmaking, but this service changed my perspective. They thoroughly vetted profiles and introduced me to a woman who shared my passion for literature. We're in a meaningful relationship.",
                  image: nutritionistImg
                }
              ].map((testimonial, index) => (
                <div key={index} className="min-w-[260px] max-w-[260px] bg-white rounded-2xl p-4 shadow-lg border border-sage/10 relative flex-shrink-0">
                  <div className="absolute top-4 left-4">
                    <Quote className="w-8 h-8 text-amber-600/20" />
                  </div>
                  <div className="flex items-start space-x-4 mb-4 pt-8">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{testimonial.text}</p>
                </div>
              ))}
              {/* Duplicate set for seamless infinite loop */}
              {[
                {
                  name: "Neeta, 35",
                  role: "Teacher",
                  text: "I was overwhelmed. Everything! They filtered meetings, and even planned chemistry was undeniable, allowing me to focus on connecting with someone special. We had a beautiful wedding!",
                  image: marriageCounsellingImg
                },
                {
                  name: "Priya, 32",
                  role: "Software Engineer",
                  text: "I met my husband through their service. They genuinely care about their clients. They filtered out the creeps and involved my parents, allowing me to focus on connecting with someone special.",
                  image: datingCoachImg
                },
                {
                  name: "Vikram, 36",
                  role: "University Lecturer",
                  text: "Tired of endless messages, I found this service. They understood my needs and filtered through profiles. One day, they found someone who shared my love for technology and career ambitions. We clicked instantly!",
                  image: personalTherapyImg
                },
                {
                  name: "Kamini, 29",
                  role: "Lawyer",
                  text: "I was skeptical about online matchmaking, but this service changed my perspective. They thoroughly vetted profiles and introduced me to a woman who shared my passion for literature. We're in a meaningful relationship.",
                  image: nutritionistImg
                }
              ].map((testimonial, index) => (
                <div key={`dup-${index}`} className="min-w-[260px] max-w-[260px] bg-white rounded-2xl p-4 shadow-lg border border-sage/10 relative flex-shrink-0" aria-hidden="true">
                  <div className="absolute top-4 left-4">
                    <Quote className="w-8 h-8 text-amber-600/20" />
                  </div>
                  <div className="flex items-start space-x-4 mb-4 pt-8">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Experts */}
      <section id="experts" className="py-20 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-cool opacity-8 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-purple opacity-12 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-accent-blue mr-3" />
                <h2 className="text-4xl font-bold text-foreground">Connect With Our Experts</h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our team of qualified professionals is here to support you on your wellness journey. 
                Each expert brings years of experience and a deep commitment to your wellbeing.
              </p>
              
              <div className="grid gap-6">
                {experts.map((expert, index) => {
                  const gradients = ['gradient-warm', 'gradient-cool', 'gradient-purple'];
                  const gradient = gradients[index % gradients.length];
                  
                  return (
                    <Card key={index} className="shadow-medium hover:shadow-heavy transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 bg-${gradient} rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform flex-shrink-0`}>
                            {expert.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-1">{expert.name}</h3>
                            <p className="text-primary font-medium mb-1">{expert.specialty}</p>
                            <p className="text-sm text-muted-foreground mb-2">{expert.experience} experience</p>
                            <p className="text-sm text-muted-foreground">{expert.approach}</p>
                          </div>
                          <Button variant="warm" size="sm" onClick={() => window.open("https://wa.me/918073286312", "_blank", "noopener,noreferrer")}>Book Session</Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
            
            <div className="lg:ml-8">
              <img 
                src={expertTeamImage} 
                alt="Diverse team of SABA SOCIAL experts and professionals" 
                className="rounded-2xl shadow-heavy w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join as Expert */}
      <section className="py-20 bg-gradient-sage relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-warm opacity-8 rounded-full -translate-y-48 -translate-x-48"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-cool opacity-10 rounded-full translate-y-36 translate-x-36"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-accent-orange mr-3" />
            <h2 className="text-4xl font-bold text-foreground">Join SABA SOCIAL as an Expert</h2>
          </div>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Are you a qualified professional in therapy, nutrition, law, or other wellness fields? Join our community of experts 
            and make a meaningful impact while growing your practice.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
            <Card className="p-6 shadow-colorful hover:shadow-heavy transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Benefits for Experts:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-warm mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Convenient: Consult remotely and connect with audiences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-warm mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Flexible: Create your own appointment calendar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-warm mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Personal Branding: Contact us for our branding programme</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 shadow-colorful hover:shadow-heavy transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-cool rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">More Benefits:</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Fast Payments: Payouts settled within a week</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Peer Community: Connected, supportive professional environment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Growth Support: Marketing and business development assistance</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="sunset" size="xl" className="group" onClick={() => window.open("https://wa.me/918073286312", "_blank", "noopener,noreferrer")}>
              <Award className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Become an Anchor
            </Button>
            <Button variant="purple" size="xl" className="group" onClick={() => window.open("https://wa.me/918073286312", "_blank", "noopener,noreferrer")}>
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Contact Us to Learn More
            </Button>
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
            <Button variant="hero-secondary" size="xl" className="bg-white text-primary-dark hover:bg-white/90" onClick={() => window.open("https://wa.me/918073286312", "_blank", "noopener,noreferrer")}>
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Session Now
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
                So if you're curious about saba social, you could just say it as a nest of supergood feel anchors which help you stay safe & warm during storms related to personal relationships, marriage, nutrition, intimacy, personal counseling, legal navigators, CA, dermatology
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
                <li><a href="https://wa.me/918073286312" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book Now</a></li>
                <li><a href="https://wa.me/918073286312" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Join as Expert</a></li>
                <li><a href="https://wa.me/918073286312" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Resources</a></li>
                <li><a href="https://wa.me/918073286312" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Emergency Support</a></li>
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

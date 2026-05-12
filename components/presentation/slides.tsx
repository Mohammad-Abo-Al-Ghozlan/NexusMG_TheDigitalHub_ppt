"use client"

import { motion } from "framer-motion"
import {
  Users,
  GraduationCap,
  Shield,
  Code2,
  Database,
  Brain,
  Lock,
  Github,
  Linkedin,
  FileText,
  BarChart3,
  Sparkles,
  Smartphone,
  Cloud,
  Briefcase,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Layers,
  Zap,
  Settings,
  Globe,
  ChevronRight,
  Play,
  MousePointerClick,
  MonitorCheck,
} from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

type VideoShowcaseProps = {
  videoSrc?: string
  youtubeId?: string
  thumbnailSrc?: string
  title?: string
}

function VideoShowcase({
  videoSrc,
  youtubeId,
  thumbnailSrc = "/placeholder.jpg",
  title = "Watch 1-Min Overview",
}: VideoShowcaseProps) {
  const embedUrl = '/NexusMG-proposal-NW.mp4'

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative overflow-hidden rounded-2xl border border-blue-300/20 bg-slate-950/50 p-2 shadow-2xl shadow-blue-950/30 backdrop-blur-2xl"
      aria-label="NexusMG one minute explainer video"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-400/5 to-indigo-500/20 opacity-70" />
      <div className="absolute -inset-16 bg-[radial-gradient(circle_at_50%_40%,rgba(96,165,250,0.22),transparent_45%)] transition-transform duration-700 group-hover:scale-125" />

      <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-slate-950">
        {embedUrl ? (
          <iframe
            className="h-full w-full"
            src={embedUrl}
            title={title}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : videoSrc ? (
          <video className="h-full w-full object-cover" src={videoSrc} poster={thumbnailSrc} controls preload="metadata" />
        ) : (
          <img className="h-full w-full object-cover opacity-60" src={thumbnailSrc} alt="NexusMG product overview preview" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
        <button
          type="button"
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-200/40 bg-blue-500/25 text-white shadow-[0_0_48px_rgba(59,130,246,0.55)] backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-400/35"
          aria-label={title}
        >
          <Play className="ml-1 h-7 w-7 fill-white" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-500/15 px-3 py-1 text-xs font-medium text-blue-100">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
            Premium explainer
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {/* <p className="mt-1 max-w-md text-sm text-blue-100/75">
            Problem, AI readiness evaluation, and the growth loop for developers.
          </p> */}
        </div>
      </div>
    </motion.div>
  )
}

// Slide 1: Title
export function TitleSlide() {
  const trustSignals = ["LinkedIn + GitHub + CV intelligence", "Role-based academy dashboards", "AI readiness score in minutes"]

  return (
    <div className="relative h-full w-full overflow-hidden px-16 py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.28),transparent_32%),radial-gradient(circle_at_78%_24%,rgba(14,165,233,0.16),transparent_28%),linear-gradient(135deg,rgba(2,6,23,0.35),rgba(15,23,42,0.88))]" />
      <div className="absolute left-1/2 top-0 h-px w-[760px] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(96,165,250,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.06)_1px,transparent_1px)] [background-size:46px_46px]" />

      <motion.div
        initial={{ opacity: 0, y: 28, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pointer-events-none absolute right-12 top-24 z-0 hidden w-[470px] rotate-2 lg:block"
      >
        <div className="glass-card rounded-2xl p-5 shadow-2xl shadow-blue-950/40">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-blue-300/80">Readiness Command Center</p>
              <p className="text-3xl font-bold text-white">86%</p>
            </div>
            <div className="rounded-full border border-green-300/25 bg-green-400/10 px-3 py-1 text-xs text-green-200">Investor demo</div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["LinkedIn", "GitHub", "CV"].map((item, index) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <p className="text-[10px] text-muted-foreground">{item}</p>
                <div className="mt-3 h-2 rounded-full bg-slate-700">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" style={{ width: `${78 + index * 7}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-blue-300/15 bg-blue-500/10 p-4">
            <div className="mb-3 h-2 w-2/3 rounded-full bg-blue-200/40" />
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-white/10" />
              <div className="h-2 w-5/6 rounded-full bg-white/10" />
              <div className="h-2 w-3/4 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 grid h-full grid-cols-[1.05fr_0.95fr] items-center gap-10"
      >
        <div>
          <motion.div variants={fadeInUp} className="mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-100 shadow-[0_0_24px_rgba(59,130,246,0.18)]">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              AI career intelligence for developers
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="mb-5 max-w-3xl text-6xl font-bold leading-[0.98] tracking-tight">
            <span className="gradient-text glow-text">Developer readiness,</span>
            <br />
            scored by AI.
          </motion.h1>

          <motion.p variants={fadeInUp} className="mb-7 max-w-2xl text-xl leading-relaxed text-blue-100/78">
            NexusMG evaluates LinkedIn profiles, GitHub repositories, and resumes to turn career uncertainty into a precise,
            coachable readiness signal.
          </motion.p>

          <motion.div variants={fadeInUp} className="mb-7 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_34px_rgba(59,130,246,0.42)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400">
              Start readiness scan
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-blue-200/25 bg-white/5 px-5 py-3 text-sm font-semibold text-blue-100 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
              <Play className="h-4 w-4" />
              Watch 1-Min Overview
            </button>
          </motion.div>

          <motion.div variants={stagger} className="grid max-w-2xl grid-cols-3 gap-3">
            {trustSignals.map((signal) => (
              <motion.div key={signal} variants={scaleIn} className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-blue-100/80 backdrop-blur-xl">
                {signal}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <VideoShowcase />
      </motion.div>
    </div>
  )
}

// Slide 2: Introduction / Overview
export function IntroductionSlide() {
  const impactPoints = [
    { icon: Sparkles, title: "The Problem", description: "Developers lack structured feedback on their professional profiles" },
    { icon: Rocket, title: "Our Solution", description: "AI-powered evaluation of LinkedIn, GitHub, and CVs" },
    { icon: BarChart3, title: "The Outcome", description: "Quantified readiness scores with actionable insights" },
    { icon: Briefcase, title: "Real Impact", description: "Bridge the gap between education and employment" },
  ]

  return (
    <div className="h-full w-full flex flex-col px-16 py-12">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="flex-1 flex flex-col">
        <motion.div variants={fadeInUp} className="mb-10">
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Introduction</span>
          <h2 className="text-5xl font-bold mt-2 text-balance">
            What is <span className="gradient-text">NexusMG</span>?
          </h2>
        </motion.div>

        <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-3xl mb-12 leading-relaxed">
          NexusMG is an intelligent platform that evaluates developer readiness by analyzing professional profiles,
          code repositories, and resumes — providing structured feedback to accelerate career growth.
        </motion.p>

        <motion.div variants={stagger} className="grid grid-cols-4 gap-6 flex-1">
          {impactPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="glass-card rounded-2xl p-6 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

// Slide 3: Target Users
export function TargetUsersSlide() {
  const users = [
    {
      role: "Trainee",
      icon: GraduationCap,
      color: "blue",
      needs: "Career guidance and skill assessment",
      helps: "Get AI-powered feedback on profiles",
      benefits: "Accelerate job readiness with data-driven insights",
    },
    {
      role: "Instructor",
      icon: Users,
      color: "indigo",
      needs: "Track student progress efficiently",
      helps: "Dashboard with aggregated analytics",
      benefits: "Make informed decisions on training focus",
    },
    {
      role: "Admin",
      icon: Shield,
      color: "purple",
      needs: "Manage users and system access",
      helps: "Role-based access control panel",
      benefits: "Secure, organized platform management",
    },
  ]

  return (
    <div className="h-full w-full flex flex-col px-16 py-12">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="flex-1 flex flex-col">
        <motion.div variants={fadeInUp} className="mb-12">
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">User Personas</span>
          <h2 className="text-5xl font-bold mt-2">Target Users</h2>
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-3 gap-8 flex-1">
          {users.map((user, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="glass-card rounded-2xl p-8 flex flex-col relative overflow-hidden group"
            >
              {/* Glow effect on hover */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${user.color}-500/10 rounded-full blur-3xl group-hover:bg-${user.color}-500/20 transition-all duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/30 to-indigo-500/20 flex items-center justify-center mb-6">
                  <user.icon className="w-8 h-8 text-blue-300" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-foreground">{user.role}</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-blue-400 mb-1">What They Need</p>
                    <p className="text-sm text-muted-foreground">{user.needs}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-blue-400 mb-1">How We Help</p>
                    <p className="text-sm text-muted-foreground">{user.helps}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-blue-400 mb-1">Why It Matters</p>
                    <p className="text-sm text-muted-foreground">{user.benefits}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

// Slide 4: Tech Stack
export function TechStackSlide() {
  const stacks = [
    {
      category: "Frontend",
      items: ["React 18", "Vite", "TypeScript", "TailwindCSS", "Shadcn/UI", "Framer Motion"],
      icon: Code2,
    },
    {
      category: "Backend",
      items: ["FastAPI", "SQLAlchemy 2.0", "Alembic", "Pydantic v2"],
      icon: Layers,
    },
    {
      category: "Database",
      items: ["MySQL"],
      icon: Database,
    },
    {
      category: "AI Layer",
      items: ["LiteLLM", "Groq"],
      icon: Brain,
    },
    {
      category: "Auth & Security",
      items: ["JWT", "bcrypt", "Google Auth"],
      icon: Lock,
    },
    {
      category: "State & Validation",
      items: ["Zustand", "React Hook Form", "Zod", "Axios"],
      icon: Settings,
    },
  ]

  return (
    <div className="h-full w-full flex flex-col px-16 py-12">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="flex-1 flex flex-col">
        <motion.div variants={fadeInUp} className="mb-10">
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Technology</span>
          <h2 className="text-5xl font-bold mt-2">Tech Stack</h2>
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-3 gap-5 flex-1">
          {stacks.map((stack, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="glass-card rounded-xl p-5 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <stack.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{stack.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary/80 text-secondary-foreground border border-border/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

// Slide 5: System Architecture
export function ArchitectureSlide() {
  const flowSteps = [
    { label: "User Visits", icon: Globe },
    { label: "Sign In/Up", icon: Lock },
    { label: "Submit Data", icon: FileText },
    { label: "Validate", icon: CheckCircle2 },
    { label: "AI Evaluates", icon: Brain },
    { label: "View Results", icon: BarChart3 },
  ]

  return (
    <div className="h-full w-full flex flex-col px-16 py-12">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="flex-1 flex flex-col">
        <motion.div variants={fadeInUp} className="mb-10">
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Architecture</span>
          <h2 className="text-5xl font-bold mt-2">System Flow</h2>
        </motion.div>

        {/* Flow Diagram */}
        <motion.div variants={fadeInUp} className="mb-10">
          <div className="flex items-center justify-between glass-card rounded-2xl p-6">
            {flowSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-500/20 flex items-center justify-center mb-2">
                    <step.icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <span className="text-xs text-muted-foreground text-center">{step.label}</span>
                </div>
                {index < flowSteps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-blue-500/50 mx-3" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Architecture Components */}
        <motion.div variants={stagger} className="grid grid-cols-4 gap-5 flex-1">
          <motion.div variants={scaleIn} className="glass-card rounded-xl p-5 flex flex-col items-center justify-center text-center">
            <Code2 className="w-10 h-10 text-blue-400 mb-3" />
            <h4 className="font-semibold mb-1 text-foreground">Frontend</h4>
            <p className="text-xs text-muted-foreground">React + Vite</p>
            <p className="text-xs text-muted-foreground">User Interface</p>
          </motion.div>
          
          <motion.div variants={scaleIn} className="glass-card rounded-xl p-5 flex flex-col items-center justify-center text-center">
            <Layers className="w-10 h-10 text-indigo-400 mb-3" />
            <h4 className="font-semibold mb-1 text-foreground">Backend API</h4>
            <p className="text-xs text-muted-foreground">FastAPI</p>
            <p className="text-xs text-muted-foreground">Business Logic</p>
          </motion.div>
          
          <motion.div variants={scaleIn} className="glass-card rounded-xl p-5 flex flex-col items-center justify-center text-center">
            <Database className="w-10 h-10 text-purple-400 mb-3" />
            <h4 className="font-semibold mb-1 text-foreground">Database</h4>
            <p className="text-xs text-muted-foreground">MySQL</p>
            <p className="text-xs text-muted-foreground">Data Persistence</p>
          </motion.div>
          
          <motion.div variants={scaleIn} className="glass-card rounded-xl p-5 flex flex-col items-center justify-center text-center glow-blue">
            <Brain className="w-10 h-10 text-blue-300 mb-3" />
            <h4 className="font-semibold mb-1 text-foreground">AI Engine</h4>
            <p className="text-xs text-muted-foreground">LiteLLM / Groq</p>
            <p className="text-xs text-muted-foreground">Smart Evaluation</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Slide 6: Core Features
export function CoreFeaturesSlide() {
  const features = [
    { icon: Linkedin, title: "LinkedIn Audit", description: "Profile optimization insights" },
    { icon: Github, title: "GitHub Analysis", description: "Repository quality assessment" },
    { icon: FileText, title: "CV Evaluation", description: "Resume improvement feedback" },
    { icon: BarChart3, title: "Readiness Score", description: "Quantified career readiness" },
    { icon: Users, title: "Instructor Dashboard", description: "Track trainee progress" },
    { icon: Lock, title: "Role-Based Access", description: "Secure user management" },
  ]

  return (
    <div className="h-full w-full flex flex-col px-16 py-12">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="flex-1 flex flex-col">
        <motion.div variants={fadeInUp} className="mb-10">
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Functionality</span>
          <h2 className="text-5xl font-bold mt-2">Core Features</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Features Grid */}
          <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="glass-card rounded-xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1 text-foreground">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div variants={scaleIn} className="glass-card relative overflow-hidden rounded-2xl p-5">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-cyan-400/15 blur-3xl" />
            <img
              src="/NexusMG-dashboard.png"
              alt="NexusMG dashboard image preview"
              className="relative z-10 h-full min-h-[310px] w-full rounded-xl border border-white/10 object-cover opacity-75"
            />
            <div className="absolute inset-5 z-20 rounded-xl bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 z-30">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100 backdrop-blur-xl">
                <MonitorCheck className="h-3.5 w-3.5" />
                Live readiness snapshot
              </div>
              {/* <div className="grid grid-cols-3 gap-3">
                {[
                  ["92", "Profile clarity"],
                  ["81", "Repo quality"],
                  ["76", "CV strength"],
                ].map(([score, label]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-slate-950/55 p-3 backdrop-blur-xl">
                    <p className="text-2xl font-bold text-white">{score}</p>
                    <p className="text-[11px] text-blue-100/70">{label}</p>
                  </div>
                ))}
              </div> */}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

// Slide 7: AI Features
export function AIFeaturesSlide() {
  const aiFeatures = [
    { title: "Model Integration", description: "LiteLLM + Groq for fast inference" },
    { title: "Structured Evaluations", description: "Consistent, actionable feedback format" },
    { title: "Smart Feedback", description: "Context-aware improvement suggestions" },
    { title: "Readiness Index", description: "Composite score from multiple metrics" },
  ]

  return (
    <div className="h-full w-full flex flex-col px-16 py-12">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="flex-1 flex flex-col">
        <motion.div variants={fadeInUp} className="mb-10">
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Intelligence</span>
          <h2 className="text-5xl font-bold mt-2">AI-Powered Engine</h2>
        </motion.div>

        <div className="flex-1 grid grid-cols-5 gap-6">
          {/* Central AI Panel */}
          <motion.div
            variants={scaleIn}
            className="col-span-2 glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center glow-blue relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/5" />
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/40 to-indigo-500/30 flex items-center justify-center mb-6 mx-auto">
                <Brain className="w-12 h-12 text-blue-200" />
              </div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">AI Evaluation Core</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Intelligent analysis engine that processes LinkedIn profiles, GitHub repositories, and CVs
                to generate comprehensive developer readiness assessments.
              </p>
            </div>
          </motion.div>

          {/* AI Features */}
          <motion.div variants={stagger} className="col-span-3 grid grid-cols-2 gap-4">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="glass-card rounded-xl p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
            
            {/* How AI Improves UX */}
            <motion.div
              variants={scaleIn}
              className="col-span-2 glass-card rounded-xl p-6 bg-gradient-to-r from-blue-500/10 to-transparent"
            >
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <h4 className="font-semibold text-foreground">Enhanced Decision Making</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                AI transforms raw data into structured insights, enabling trainees to focus on high-impact improvements
                and instructors to provide targeted guidance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

// Slide 9: Challenges & Solutions
export function ChallengesSolutionsSlide() {
  const challenges = [
    {
      challenge: "Secure Authentication & Role Separation",
      solution: "JWT-based auth, Google sign-in, bcrypt hashing, and role-based middleware for granular access control",
    },
    {
      challenge: "Async Backend for AI Evaluation",
      solution: "SQLAlchemy 2.0 async with FastAPI for non-blocking AI model calls and MySQL database operations",
    },
    {
      challenge: "Transforming Raw AI Output",
      solution: "Pydantic v2 schemas to validate and structure AI responses into consistent, usable formats",
    },
  ]

  return (
    <div className="h-full w-full flex flex-col px-16 py-12">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="flex-1 flex flex-col">
        <motion.div variants={fadeInUp} className="mb-12">
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Engineering</span>
          <h2 className="text-5xl font-bold mt-2">Challenges & Solutions</h2>
        </motion.div>

        <motion.div variants={stagger} className="space-y-6 flex-1">
          {challenges.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card rounded-2xl p-6"
            >
              <div className="grid grid-cols-2 gap-8 items-center">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center shrink-0">
                    <span className="text-red-400 font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-red-400 mb-1 block">Challenge</span>
                    <p className="text-foreground font-medium">{item.challenge}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ArrowRight className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-green-400 mb-1 block">Solution</span>
                    <p className="text-muted-foreground text-sm">{item.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

// Slide 10: Team Roles
export function TeamRolesSlide() {
  const roles = [
    { role: "Frontend Development", members: "Somanaya", color: "blue" },
    { role: "UI/UX Design", members: "Somanaya", color: "pink" },
    { role: "Backend Development", members: "Mohammad", color: "indigo" },
    { role: "AI Integration", members: "Mohammad", color: "purple" },
    { role: "Testing", members: "Somanaya & Mohammad", color: "cyan" },
  ]

  return (
    <div className="h-full w-full flex flex-col px-16 py-12">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="flex-1 flex flex-col">
        <motion.div variants={fadeInUp} className="mb-10">
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Team</span>
          <h2 className="text-5xl font-bold mt-2">Roles & Contributions</h2>
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-5 gap-4 flex-1 content-center">
          {roles.map((item, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="glass-card rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/20 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-300" />
              </div>
              <h4 className="font-semibold text-sm mb-2 text-foreground">{item.role}</h4>
              <p className="text-xs text-muted-foreground">{item.members}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

// Slide 11: Future Work
export function FutureWorkSlide() {
  const roadmapItems = [
    { icon: Smartphone, title: "Mobile App", description: "Native iOS/Android experience" },
    { icon: Brain, title: "Stronger AI Models", description: "GPT-4, Claude integration" },
    { icon: BarChart3, title: "Advanced Analytics", description: "Predictive insights" },
    { icon: Cloud, title: "Cloud Scalability", description: "Auto-scaling infrastructure" },
    { icon: FileText, title: "Portfolio Generator", description: "Auto-build portfolios" },
    { icon: Briefcase, title: "Job Board Integration", description: "Direct job matching" },
  ]

  return (
    <div className="h-full w-full flex flex-col px-16 py-12">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="flex-1 flex flex-col">
        <motion.div variants={fadeInUp} className="mb-10">
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Roadmap</span>
          <h2 className="text-5xl font-bold mt-2">Future Work</h2>
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-3 gap-6 flex-1 content-center">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="glass-card rounded-xl p-6 flex items-center gap-4 group hover:bg-blue-500/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1 text-foreground">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

// Slide 12: Conclusion
export function ConclusionSlide() {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-indigo-500/15 rounded-full blur-[100px]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto px-8"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Conclusion</span>
        </motion.div>

        <motion.h2 variants={fadeInUp} className="text-5xl font-bold mb-6">
          Building the Future of{" "}
          <span className="gradient-text">Developer Readiness</span>
        </motion.h2>

        <motion.div variants={fadeInUp} className="glass-card rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <Sparkles className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h4 className="font-semibold mb-1 text-foreground">What We Built</h4>
              <p className="text-sm text-muted-foreground">AI-powered evaluation platform with multi-role access</p>
            </div>
            <div>
              <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h4 className="font-semibold mb-1 text-foreground">Problem Solved</h4>
              <p className="text-sm text-muted-foreground">Bridge between education and employment</p>
            </div>
            <div>
              <Rocket className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
              <h4 className="font-semibold mb-1 text-foreground">Impact Delivered</h4>
              <p className="text-sm text-muted-foreground">Data-driven insights for career acceleration</p>
            </div>
          </div>
        </motion.div>

        <motion.p variants={fadeInUp} className="text-2xl font-light text-blue-200/90 mb-8">
          Empowering developers to reach their full potential.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
          <div className="glass-card flex items-center gap-4 rounded-2xl px-6 py-4 text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
              <MousePointerClick className="h-6 w-6 text-blue-300" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Thank you for your attention</p>
              <p className="text-lg font-semibold gradient-text">Questions?</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

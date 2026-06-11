const DATA = {
    name: "Zeyu Cui",
    bio: "I am a core contributor to the Qwen Series, with a primary focus on Qwen-Coder. \n\nMy goal is to drive substantial productivity gains through AI-powered automation. Currently, I'm focusing on advancing the coding capabilities of large language models. Thanks to nearly years of open-source data accumulated by developers worldwide, this field is poised to drive digital automation faster than any other domain. \n\nFeel free to contact me  for anything.",
    avatar: "avatar.jpg",
  
    info: [
      { label: "Location", value: "Beijing" },
      { label: "Major",    value: "Coding Agent" },
      { label: "Interest", value: "Coding LLM, UX, Webdev" },
    ],
  
    links: [
      { name: "Scholar",  icon: "🎓", url: "https://scholar.google.com/citations?hl=zh-CN&user=QVxn-CkAAAAJ" },
      { name: "GitHub",   icon: "💻", url: "https://github.com/cyente" },
      { name: "Twitter",  icon: "🐦", url: "https://x.com/czy_yente?s=09" },
      { name: "Email",    icon: "✉️",  url: "mailto:cuizeyu@gmail.com" },
    ],
  
    research: [
      {
        title: "What kinds of coding data we need to scaling for more coding intelligence?",
        desc: "I believe the dividends that data brings to large language models are far from reaching their ceiling. The continuous exploration of how to better acquire, organize, synthesize, filter, and validate coding data remains one of the most promising frontiers for pushing model performance to new heights.",
      },
      {
        title: "How to evaluation a coding agent？",
        desc: "Open-source benchmarks are far from sufficient to capture every dimension of agentic coding capabilities — including human preferences, task-specific scenarios (such as front-end, back-end, scientific computing, etc.), and the full upstream-downstream chain of real-world development (PRD, operations, testing, development, etc.). At its core, building a meaningful evaluation framework is about discovering and defining the right problems.",
      },
      {
        title: "What is the next generation of coding agent？",
        desc: "Currently focus on agent2UI and AIOS.",
      },
      {
        title: "Front-end capability of LLMs/VLMs",
        desc: "Front-end development tasks encompass a wide range of areas, including web development, 3D modeling, game development, SVG creation, and more. Both aesthetics and functionality are critical evaluation metrics in this domain. I am pleased to share that Qwen2.5-Coder has recently achieved 3rd place globally on CodeArena — a benchmark primarily designed to evaluate front-end development scenarios.",
      },
      {
        title: "User experience of coding agent",
        desc: "User experience-related challenges include the construction of user models, the development of user experience reward models, the generation of broader and more diverse simulated user queries, as well as the annotation and synthesis of interaction trajectories.",
      },
    ],
  
    works: [
      {
        title: "Qwen3.7: The Agent Frontier",
        desc: "Foundation models delivering top-tier performance in language understanding, reasoning, math, and coding.",
        url: "https://qwen.ai/blog?id=qwen3.7",
        tag: "2026",
      },
      {
        title: "Qwen3-Coder-Next Technical Report",
        desc: "An 80B-parameter MoE model activating only 3B during inference, achieving competitive performance on SWE-Bench and Terminal-Bench.",
        url: "https://arxiv.org/abs/2603.00729",
        tag: "2026",
      },
      {
        title: "Qwen2.5-Coder Technical Report",
        desc: "Code-specific LLM series (0.5B–32B) pretrained on 5.5T tokens, achieving SOTA across 10+ code benchmarks. (Core Contributor)",
        url: "https://arxiv.org/abs/2409.12186",
        tag: "2024",
      },
    ],
  
    experience: [
      {
        time: "2021 – Present",
        role: "Staff Research Scientist",
        org:  "Qwen Team, Alibaba-inc.",
        details: [
          { time: "2025", desc: "Qwen3.x series, coding agent capability combination." },
          { time: "2025", desc: "Qwen3-Coder series, code pre-training & coding agent  alignment." },
          { time: "2024", desc: "Qwen2.5-Coder series, code pre-training & evaluation" },
          { time: "2023", desc: "CodeQwen1.5, code-specialized pre-training" },
          { time: "2021-2022", desc: "Generative recommendation system on large lanugage model" },
        ],
      },
      {
        time: "2016 – 2021",
        role: "Ph.D.",
        org:  "Institute of Automation, Chinese Academy of Sciences",
        details: [
          { time: "2019-2021", desc: "Graph Neural Network for recommendation" },
          { time: "2016-2019", desc: "Collaborative filtering & sequential recommendation" },
        ],
      },
      {
        time: "2012 – 2016",
        role: "B.S. Electrical Engineering",
        org:  "North China Electric Power University",
      },
    ],
  };

const RESUME_DATA = {
  profile: {
    name: "Full Name",
    jobTitle: "Job Title",
    postnominals: "Cert1, Cert2",
    contacts: [
      { label: "+00 0000 0000", link: "tel:+000000000" },
      { label: "email@example.com", link: "mailto:email@example.com" },
      { label: "linkedin.com/in/username", link: "https://linkedin.com/in/username" }
    ]
  },
  summary: [
    "Summary paragraph 1 — introduce the person, their background and years of experience.",
    "Summary paragraph 2 — describe their area of specialisation or unique value proposition.",
    "Summary paragraph 3 — describe their working style, approach, or professional philosophy."
  ],
  experience: [
    {
      employer: "Employer Name, Location",
      role: "Job Title / Role",
      projects: [
        {
          title: "Project or Engagement Name",
          period: "Month Year – Month Year<br>Client or Organisation",
          bullets: [
            "Key responsibility or achievement — describe what was done and its impact.",
            "Key responsibility or achievement — describe what was done and its impact.",
            "Key responsibility or achievement — describe what was done and its impact."
          ]
        }
      ]
    }
  ],
  earlierCareer: [
    { employer: "Previous Employer Name", desc: "Role Title — Brief description of work done (Year – Year)" }
  ],
  skills: [
    { category: "Skill Category 1", tags: ["Skill A", "Skill B", "Skill C"] },
    { category: "Skill Category 2", tags: ["Skill D", "Skill E", "Skill F"] },
    { category: "Skill Category 3", tags: ["Skill G", "Skill H"] },
    { category: "Skill Category 4", tags: ["Tool A", "Tool B"] }
  ],
  certifications: [
    {
      name: "Certification Name",
      issuer: "Issuing Organisation",
      id: "000000",
      badge: "img/badge-placeholder.png"
    }
  ],
  publications: [
    {
      title: "Publication or Article Title",
      date: "Month Year",
      link: "https://example.com/article",
      bullets: [
        "Brief description of what the article covers — key argument or topic.",
        "Key takeaway or finding from the publication."
      ]
    }
  ],
  education: [
    {
      period: "Year – Year",
      degree: "Degree Name",
      school: "University or Institution Name",
      logo: "img/logo-placeholder.png"
    }
  ]
};

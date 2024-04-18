import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Documentation",
  description: "Critviz Documentation",
  themeConfig: {
    logo: 'assets/images/critviz.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Table of Contents', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Usage', link: '/usage' }
        ]
      },
      {
        text: 'Additional Functionality',
        items: [
          { text: 'Visibility Settings', link: '/additional-functionality#visibility-settings' },
          { text: 'Deadline Management', link: '/additional-functionality#deadline-management' },
          { text: 'Validation Options', link: '/additional-functionality#validation-options' },
          { text: 'Late Submission', link: '/additional-functionality#late-submission' },
          { text: 'Finalization of Submissions', link: '/additional-functionality#finalization-of-submissions' }
        ]
      },
      {
        text: 'Advanced Features',
        items: [
          { text: 'Question Types', link: '/advanced-features#question-types' },
          { text: 'Ordering of Questions', link: '/advanced-features#ordering-of-questions' },
          { text: 'Specifying Critique Parameters', link: '/advanced-features#specifying-critique-parameters' },
          { text: 'Ranking Critiques', link: '/advanced-features#ranking-critiques' }
        ]
      },
      {
        text: 'Troubleshooting',
        link: '/troubleshooting'
      },
      {
        text: 'FAQs',
        link: '/faqs'
      },
      {
        text: 'Glossary',
        link: '/glossary'
      },
      {
        text: 'Conclusion',
        link: '/conclusion'
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  }
})

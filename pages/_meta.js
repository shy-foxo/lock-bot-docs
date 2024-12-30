export default {

    index: {
      title: 'Home',
      type: 'page',
      display: "hidden"
    },

    
    docs: {
        title: 'Documentation',
        type: 'page',
    },

    links: {
        title: "Links",
        type: "menu",
        items: {
            invite: {
                title: 'Invite Lock Bot',
                type: 'page',
                href: 'https://discord.com/oauth2/authorize?client_id=1107865216030617600',
                newWindow: true
            },
            bluesky: {
              title: 'Bluesky',
              type: 'page',
              href: 'https://bsky.app/profile/lock-bot.com',
              newWindow: true
          },
            support: {
                title: 'Support Server',
                type: 'page',
                href: 'https://discord.gg/cGv8szjzSf',
                newWindow: true
            },
            roadmap: {
                title: 'Roadmap',
                type: 'page',
                href: 'https://sharing.clickup.com/9003150356/b/h/6-900302002559-2/f0d9effd2334748',
                newWindow: true
            },
        }
    },

    "change-log": {
        title: 'Change Log',
        type: "page",
        href: "/docs/change-log"
      },
    "beta-testing": {
        title: 'Beta Testing',
        type: 'page'
      },
    "terms-of-service": {
      title: 'Terms of Service',
      type: 'page'
    },
    "privacy-policy": {
        title: 'Privacy Policy',
        type: 'page'
      },

}
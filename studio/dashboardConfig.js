export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60789d4da851778ca2ca4231',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-z1pw6qni',
                  apiId: '9463b59c-10b7-4d9b-89f6-bc1c2ca0013a'
                },
                {
                  buildHookId: '60789d4dd956eea649f2a769',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-oe81io73',
                  apiId: 'ac760f7f-cbfc-4f30-863f-3c217e5698a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rylandstackbit/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-oe81io73.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

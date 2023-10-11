module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/Component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.stories.tsx',
        templateFile: 'plop-templates/Component/Component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.test.tsx',
        templateFile: 'plop-templates/Component/Component.test.tsx.hbs',
      },
    ],
  })

  plop.setGenerator('page', {
    description: 'create a reusable page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter page name:',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Enter path relative to app directory',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/{{path}}/{{name}}/page.tsx',
        templateFile: 'plop-templates/Page/Page.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/app/{{path}}/{{name}}/page.stories.tsx',
        templateFile: 'plop-templates/Page/Page.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/app/{{path}}/{{name}}/page.test.tsx',
        templateFile: 'plop-templates/Page/Page.test.tsx.hbs',
      },
    ],
  })
}

export default function (plop) {
	plop.setGenerator('component', {
		description: 'Создать новый React компонент',
		prompts: [
			{
				type: 'input',
				name: 'path',
				message: 'Путь к компоненту (например: shared/button):',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/components/{{path}}/{{pascalCase (lastSegment path)}}.tsx',
				templateFile: 'plop-templates/component.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{path}}/{{camelCase (lastSegment path)}}.module.css',
				templateFile: 'plop-templates/component.module.css.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{path}}/index.ts',
				templateFile: 'plop-templates/index.ts.hbs',
			},
		],
	});

	// Хелпер для получения последнего сегмента пути
	plop.setHelper('lastSegment', function (path) {
		const segments = path.split('/');
		return segments[segments.length - 1];
	});
}

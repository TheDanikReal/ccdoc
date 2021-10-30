const fs = require("fs");
const path = require("path");

function getSideBar(folder, title) {
	const extension = [".md"];

	const files = fs
		.readdirSync(path.join(`${__dirname}/../${folder}`))
		.filter(
			(item) =>
				item.toLowerCase() != "readme.md" &&
				fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
				extension.includes(path.extname(item))
		);
    for (let i = 0; i < files.length; i++) {
		let name = files[i]
		//-files[i]={text:name,link:`/${folder}/${name}`}
		files[i]=`/${folder}/${name}`
	}
	return { text: title, children: files };
}

module.exports= {
	
	//getSideBar("functions","Functions")
	'/':[
	{
			text: 'Guide',
			children: [
			'/'
			]
	},
	getSideBar('Guide','Full Guide'),
	getSideBar('Trigger','Trigger Types'),
	getSideBar('Member','Member Functions'),
	getSideBar('Channel','Channel Functions'),
	getSideBar('Message','Message Functions'),
	getSideBar('Threads','Threads Functions'),
	getSideBar('Role','Role Functions'),
	getSideBar('Server','Server Functions'),
	getSideBar('Random','Random Functions'),
	getSideBar('Text','Text Functions'),
	getSideBar('Text/Condition','Condition Functions'),
	getSideBar('Text/Embed','Embed functions'),
	getSideBar('Text/Components','Button Functions'),
	getSideBar('Text/textSplit','Text Split Functions'),
	getSideBar('Text/Math','Math Functions'),
	getSideBar('Text/Array','Array Functions'),
	getSideBar('Text/isandhas','Is and Has Functions'),
	getSideBar('Text/only','Only Functions'),
	getSideBar('Date','Date Functions'),
	getSideBar('Variables','Variables Functions'),
	getSideBar('Bot','Bot Functions'),
	getSideBar('Useful','Useful Functions'),
]
}
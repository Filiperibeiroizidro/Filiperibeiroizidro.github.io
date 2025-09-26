const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{personagem: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{personagem2: 0},
	{personagem3: 0},
	{chao: 0},
	{fundo: 0},
	{fundooo: 0},
	{fundoo: 0},
	{personagemm: 0},
	{Sólido: 0},
	{chaoo: 0}
];

self.InstanceType = {
	personagem: class extends self.ISpriteInstance {},
	personagem2: class extends self.ISpriteInstance {},
	personagem3: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {},
	fundo: class extends self.ISpriteInstance {},
	fundooo: class extends self.ISpriteInstance {},
	fundoo: class extends self.ISpriteInstance {},
	personagemm: class extends self.ISpriteInstance {},
	chaoo: class extends self.ISpriteInstance {}
}
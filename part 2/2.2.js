// Use this sample to create your own voice commands
intent("hello world", (p) => {
	p.play("(hello|hi there)");
});

intent("What can I get here?", (p) => {
	p.play("You can order coffee and dessert");
});

intent("Get me a coffee", (p) => {
	p.play("Adding one coffee to your order");
});

intent("Get me a dessert", (p) => {
	p.play("Adding one dessert to your order");
});

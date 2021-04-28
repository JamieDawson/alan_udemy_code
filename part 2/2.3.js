intent("What can I get here?", (p) => {
	p.play("You can order a coffee and a dessert");
});

intent(
	"Get me (a|an) (cappuccino|latte|americano)",
	"One (cappuccino|latte|americano), (please|)",
	"I (need|want) (a|an) (cappuccino|latte|americano)",
	(p) => {
		p.play("Adding one coffee to your order", "Sure", "Here you go");
	}
);

intent(
	"Get me (a|an) (cheesecake|brownie|apple pie)",
	"One (cheesecake|brownie|apple pie), (please|)",
	"I (need|want) (a|an) (cheesecake|brownie|apple pie)",
	(p) => {
		p.play("Your dessert is added", "Sure", "Here you go");
	}
);

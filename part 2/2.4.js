intent("What can I get here?", (p) => {
	p.play("You can order a coffee and a dessert");
});

let coffeeSlot = "cappuccino|latte|americano";

intent(
	`Get me (a|an) $(COFFEE ${coffeeSlot})`,
	`One $(COFFEE ${coffeeSlot}), (please|)`,
	`I (need|want) (a|an) $(COFFEE ${coffeeSlot})`,
	(p) => {
		p.play(`Adding one ${p.COFFEE.value} to your order`);
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

intent("My name is $(NAME)", (p) => {
	p.play(`Thank you, ${p.NAME.value}`);
});

intent("My address is $(LOC)", (p) => {
	p.play(`Thank you, we will deliver your order to ${p.LOC.value}`);
});

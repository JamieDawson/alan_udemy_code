let coffeeSlot = "cappuccino|latte|americano";
let dessertSlot = "cheesecake|brownie|apple pie";

intent(noctx, "What can I get here?", (p) => {
	p.play("You can order a coffee and a dessert");
});

intent(
	`Get me (a|an) $(COFFEE ${coffeeSlot})`,
	`One $(COFFEE ${coffeeSlot}), (please|)`,
	`I (need|want) (a|an) $(COFFEE ${coffeeSlot})`,
	(p) => {
		p.userData.coffee = p.COFFEE.value;
		p.play(`Adding one ${p.COFFEE.value} to your order`, "Sure", "Here you go");
		p.play("Please choose a dessert");
		p.then(orderDessert);
	}
);

let orderDessert = context(() => {
	intent(
		`Get me (a|an) $(DESSERT ${dessertSlot})`,
		`One $(DESSERT ${dessertSlot}), (please|)`,
		`I (need|want) (a|an) $(DESSERT ${dessertSlot})`,
		(p) => {
			p.userData.dessert = p.DESSERT.value;
			p.play(`Your ${p.DESSERT.value} is added`, "Sure", "Here you go");
			p.play("Please provide your name");
			p.then(checkout);
		}
	);
});

let checkout = context(() => {
	intent("My name is $(NAME)", (p) => {
		p.play(`Thank you, ${p.NAME.value}`);
		p.play("And what is your address?");
	});

	intent("My address is $(LOC)", (p) => {
		p.play(`Thank you, we will deliver your order to ${p.LOC.value}`);
		p.play("Is your order correct?");
		p.then(confirmOrder);
	});
});

let confirmOrder = context(() => {
	intent("Yes, (it is correct|)", (p) => {
		p.play("Thank you");
		p.resolve();
	});

	intent("No, (I want to change it|)", (p) => {
		p.play("Sure, take your time");
		p.resolve();
	});
	fallback("You have to say Yes or No");
});

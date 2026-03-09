const users = [
	{firstName: "John", lastName: "Doe", points: 110},
	{firstName: "Tony", lastName: "Stark", points: 99},
	{firstName: "Victor", lastName: "Doom", points: 180}
];

const newUsers = users.map(function (user)
                           {
	                           return {
		                           fullName: `${user.firstName} ${user.lastName}`,
		                           membershipStatus: user.points > 100 ? "Premium" : "Standard"
	                           };
                           });

console.log(newUsers);
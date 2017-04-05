class Person {
    Id: number;
    Name: string;
    Country: string;

    static All(): Array<Person> {
        var people = new Array<Person>();

        var john = new Person();
        john.Id = 1;
        john.Name = "john";
        john.Country = "USA";
        people.push(john);

        var peter = new Person();
        peter.Id = 2;
        peter.Name = "peter";
        peter.Country = "UK";
        people.push(peter);

        var jane = new Person();
        jane.Id = 3;
        jane.Name = "jane";
        jane.Country = "USA";
        people.push(jane);

        return people;
    }
}

class Country {
    Id: number;
    Name: string;

    static All(): Array<Country> {
        var countries = new Array<Country>();  

        var usa = new Country();
        usa.Id = 1;
        usa.Name = "USA";
        countries.push(usa);

        var uk = new Country();
        uk.Id = 2;
        uk.Name = "UK";
        countries.push(uk);

        var japan = new Country();
        japan.Id = 3;
        japan.Name = "JAPAN";
        countries.push(japan);

        return countries;
    }
}
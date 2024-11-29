// Calculate Discounts Based on Membership Level

function Membership(){
    let Amount =20000;
    let Level_membership="gold"
    switch (true){
        case(Level_membership === "bronze"):
        let bronze_Discounts =10;
        let bronze_Discounts_Amount=(Amount*bronze_Discounts)/100;
        console.log(` ${Level_membership} membership level. ${bronze_Discounts_Amount} discount applied  Total amount ${Amount-bronze_Discounts_Amount}`);
        break;
        case(Level_membership === "silver"):
        let silver_Discounts =20;
        let silver_Discounts_Amount=(Amount*silver_Discounts)/100;
        console.log(` ${Level_membership} membership level. ${silver_Discounts_Amount} discount applied  Total amount ${Amount-silver_Discounts_Amount}`);
        break;
        case(Level_membership === "gold"):
        let gold_Discounts =30;
        let gold_Discounts_Amount=(Amount*gold_Discounts)/100;
        console.log(` ${Level_membership} membership level. ${gold_Discounts_Amount} discount applied  Total amount ${Amount-gold_Discounts_Amount}`);
        break;
        case(Level_membership === "platinum"):
        let platinum_Discounts =40;
        let platinum_Discounts_Amount=(Amount*platinum_Discounts)/100;
        console.log(` ${Level_membership} membership level. ${platinum_Discounts_Amount} discount applied  Total amount ${Amount-platinum_Discounts_Amount}`);
        break;
        default:
            console.log(`Invalid membership level. No discount applied.`);
            
    }

}
Membership()

// 2.Determine the Season Based on the Month

function Months_season() {
    let season = ["winter", "winter", "spring", "spring", "spring", "monsoon", "monsoon", "monsoon", "autumn", "autumn", "autumn", "Winter"];
    let month = 11;
    if (month >= 3 && month <= 5) {
        console.log(`It Is A ${season[2, 3, 4]} season  March To May`);
    }
    else if (month >= 6 && month <= 8) {
        console.log(`It Is A ${season[5, 6, 7]} season  June To Augest`);
    }
    else if (month >= 9 && month <= 11) {
        console.log(`It Is A ${season[8, 9, 10]} Season September To November`);
    }
    else if (month === 12 || month === 1 || month === 2) {
        console.log(`It Is A ${season[12, 0, 1]} Season December To February`);
    }
    else {
        console.log("invalid Input");
    }
}
Months_season()

function Month() {
    let Month = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    let season = ["winter", "winter", "spring", "spring", "spring", "monsoon", "monsoon", "monsoon", "autumn", "autumn", "autumn", "Winter"]
    let values = 11;
    let season_input = 11;
    switch (true) {
        case (values === 1 && season_input === 1):
            console.log(`${values} For ${Month[0]} It is a ${season[0]} season`);
            break;
        case (values === 2 && season_input === 2):
            console.log(`${values} For ${Month[1]} It is a ${season[1]} season`);
            break;
        case (values === 3 && season_input === 3):
            console.log(`${values} For ${Month[2]} It is a ${season[2]} season`);
            break;
        case (values === 4 && season_input === 4):
            console.log(`${values} For ${Month[3]} It is a ${season[3]} season`);
            break;
        case (values === 5 && season_input === 5):
            console.log(`${values} For ${Month[4]} It is a ${season[4]} season`);
            break;
        case (values === 6 && season_input === 6):
            console.log(`${values} For ${Month[5]} It is a ${season[5]} season`);
            break;
        case (values === 7 && season_input === 7):
            console.log(`${values} For ${Month[6]} It is a ${season[6]} season`);
            break;
        case (values === 8 && season_input === 8):
            console.log(`${values} For ${Month[7]} It is a ${season[7]} season`);
            break;
        case (values === 9 && season_input === 9):
            console.log(`${values} For ${Month[8]} It is a ${season[8]} season`);
            break;
        case (values === 10 && season_input === 10):
            console.log(`${values} For ${Month[9]}It is a ${season[9]} season`);
            break;
        case (values === 11 && season_input === 11):
            console.log(`${values} For ${Month[10]} It is a ${season[10]} season`);
            break;
        case (values === 12 && season_input === 12):
            console.log(`${values} For ${Month[11]} It is a ${season[11]} season`);
            break;
        default:
            console.log(`Invalid Input`);
            break;
    }
}
Month()

//3. Determine Type of Vehicle Based on Number of Wheels

function Vehicle() {
    let Wheels = 10;
    switch (true) {
        case (Wheels === 2):
            console.log(`It Is Bike Or Cycle`);
            break;
        case (Wheels === 3):
            console.log(`It Is Auto`);
            break;
        case (Wheels === 4):
            console.log(`It Is Car`);
            break;
        case (Wheels === 6):
        case (Wheels === 8):
        case (Wheels === 10):
        case (Wheels === 12):
        case (Wheels === 14):
            console.log(`It Is Truck`);
            break;
        default:
            console.log(`Unknown Vehicle Type`);
    }
}
Vehicle()

// 4. Menu Selection in a Restaurant

function Restaurant_menu(options) {
    switch (options) {
        case 1:
            console.log(`You selected Idly,Dosa with Coconut Chutney and Tea.Enjoy your Breakfast `);
            break;
        case 2:
            console.log(`You selected Pongal And Vadai.Enjoy your Breakfast`);
            break;
        case 3:
            console.log(`You selected Uttapam.Enjoy your Breakfast`);
            break;
        case 4:
            console.log(`You selected Upma.Enjoy your Breakfast`);
            break;
        case 5:
            console.log(`You selected Rava kichadi with Coconut Chutney.Enjoy your Breakfast`);
            break;
        default:
            console.log(`Invalid selection. Please choose a valid menu option`);
    }
}
Restaurant_menu(4)

// 5.Day of the Week Planner

function week_plane() {
    let week_days = "Monday";
    
    switch (true) {
        case (week_days === "Monday"):
            console.log(`Morning: Set goals for the week and prioritize tasks.\n Afternoon: Organize your workspace and digital files.\nEvening: Relax with a good book or a movie.`);
            break;
        case (week_days === "Tuesday"):
            console.log(`Morning: Work on your most important project.\nAfternoon: Continue with the project or start a new one if you finish early.\nEvening: Take a walk or do some light exercise.`);
            break;
        case (week_days === "Wednessday"):
            console.log(`Morning: Take an online course or attend a workshop.\nAfternoon: Practice new skills or work on a personal project.Evening: Meditate or do yoga to unwind`);
            break;
        case (week_days === "Thursday"):
            console.log(`Morning: Schedule meetings or catch up with colleagues.\nAfternoon: Network with industry professionals or attend a virtual event.\nEvening: Cook a new recipe or try a hobby.`);
            break;
        case (week_days === "Friday"):
            console.log(`Morning: Review the progress of your projects and adjust plans if needed.\nAfternoon: Reflect on what you've learned and how you can improve.\nEvening: Watch a documentary or listen to a podcast.`);
            break;
        case (week_days === "Saturday"):
            console.log(`Morning: Engage in creative tasks like writing, drawing, or brainstorming.\nAfternoon: Work on a side project or something you're passionate about.\n Evening: Spend time with family or friends.`);
            break;
        case (week_days === "Sunday"):
            console.log(`Morning: Sleep in and have a leisurely breakfast.\nAfternoon: Do something fun and relaxing, like visiting a park or watching a movie.\n Evening: Plan for the upcoming week and set new goals.`);
            break;

        default:
            console.log(`Invalid Input`);

    }
}
week_plane()


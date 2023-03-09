# SOFTWARE REQUIREMENTS

## Vision

**1. What is the vision of this product?**
Pet Finder is a web application that allows the user to find pets for adoption in the specific area they search for. The application also offers different parameters to find your perfect pet match for adoption.

**2. What pain point does this project solve?**
Unfortunately, there are still many people who abandon their pets or simply get tired of them and decide to leave them in shelters. The ones who suffer the consequences are always the ones who deserve it the least.

This application aims to reduce the population of pets in shelters by connecting them with prospective owners. The application will provide the prospective owners with the right information to make an informed decision and hopefully adopt their pet partner for life.

## Scope

**1. In**
    a. The app will provide the user with a search form with different parameters so they can choose the right pet.
    b. The app will allow the user to create an account and save the pets they are most interested in adopting.
    c. The app will provide the user with the contact information so they can enquire about the pet.

**2. Out**
    a. The app will connect prospective pet owners and pets in adoption but will ONLY work as an intermediary.
    b. The app won't take personal requests for adoption.
    c. The app won't display pets for adoption from diret users.

**3. Minimum Viable Product**
    a. Application that allows the user to search for pets in adoption in their area.
    b. Pet profile will show pictures, characteristics and contact information.
    c. The app will allow the user to create a personal account and will store their information safely.
    d. The app will allow the user to save their favorited pets.

**4. Stretch Goals**
    a. Include a link to access the website of the adoption agency for the pets.
    b. Include a 'share' link for the user to use.
    c. Usabitliy: The application can be compatible with a smartphone.

## Functional Requirements

    a. The user can create and update their personal account and profiles.
    b. The user can search among all the pets for adoption and narrow down the search according to their preferences.
    c. The user will be able to favorite the pets they are most interested in adopting.
    d. The user will be able to find the contact information of the shelter where the pet is located. 

**1. Data Flow**
    a. The user opens up the application and is presented with the Home page.
    b. The user creates an account and a profile. If the user already has one, logs in.
    c. The user uses the form and accordion provided to search for the area and parameters of the pets for adoption they are looking for (breed, size, age, coat, is good with kids, is good with other pets, is home trained, etc).
    d. The user is redirected to another page where the different pets are displayed (according to their parameters).
    e. The pets will be displayed in cards. These cards will have a hidden modal with additional information.
    f. The user will be bale to favorite and save the pets in their profile.

## Non-Functional Requirements

    a. Security: the application will hold sensitive information about their users, in the form of email addresses for the sake of keeping track of favorited pets. It is imperative that this information is safely stored so it cannot be accessed by third parties and used fraudulently. The API is OAuth integrated.
    b. Usability: the application will provide an easy and user-friendly experience so the final purpose of the app is met -to connect prospective pet owners and pets for adoption.

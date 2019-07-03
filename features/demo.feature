Feature: I am going to validate calculator

    @calculatortesting
    Scenario: Validate add functionality

        Given I will navigate to 'calc' website
        When I add two numbers "3" and "5"
        Then Output displayed should be "8"

    @calculatortesting
    Scenario: Validate add functionality2

        Given I will navigate to 'calc' website
        When I add two numbers "2" and "4"
        Then Output displayed should be "6"

    @angulartesting
    Scenario Outline: Validate add angular website

        Given I will navigate to 'angular' website
        When I clicked on header link
        And You will navigate to another page
        Then Enter '<text>' into search text field

        Examples:
            | text  |
            | hello |

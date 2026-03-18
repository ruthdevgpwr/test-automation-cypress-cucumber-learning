Feature: Register User
  Eu como cliente
  Quero me cadastrar na aplicação
  Para fazer um pedido de compra

  Background: Access register screen
    Given I am on signup screen

  Scenario: Cadastro com campo nome vazio
    When I click on Register button
    Then I see message "O campo nome deve ser prenchido" on register

  Scenario: Cadastro com campo email vazio
    And I fill name
    And I fill password
    When I click on Register button
    Then I see message "O campo e-mail deve ser prenchido corretamente" on register

  Scenario: Cadastro com campo email inválido
    And I fill name
    And I fill e-mail "invalidEmail"
    And I fill password
    When I click on Register button
    Then I see message "O campo e-mail deve ser prenchido corretamente" on register

  Scenario: Cadastro com campo senha vazio
    And I fill name
    And I fill e-mail "rdp@gmail.com"
    When I click on Register button
    Then I see message "O campo senha deve ter pelo menos 6 dígitos" on register

  Scenario: Cadastro com campo senha inválida
    And I fill name
    And I fill e-mail "rdp@gmail.com"
    And I fill password "123"
    When I click on Register button
    Then I see message "O campo senha deve ter pelo menos 6 dígitos" on register

  Scenario: Cadastro com de usuário com sucesso
    And I fill my credentials on register
    When I click on Register button
    Then I see success message on register
    
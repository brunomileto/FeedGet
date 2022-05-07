# SOLID

1. Sing Responsibility Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle

---

1. Cada classe tem uma responsabilidade única;
2. As classes da aplicação devem ser abertas para extensão mas fechadas para modificação;
3. Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando;
4. ....
5. Se minha classe depende de algo externo, esse algo externo deve ser fornecido pra ela e não
   criado dentro dela. Ex: Minha classe feedback necessita de enviar email. Ela vai receber o cara
   que envia email e executar algo com ele e não chamá-lo dentro dela.

- [ ] Cadastrar usuario
   - [x] Salvar usuario no banco
   - [x] Criar senha randomica
   - [x] Retornar um email com a senha e o usuario para ele acessar, com tempo determinado caso contrario é cancelado
   - [ ] Quando ele logar, o mesmo deve inserir uma nova senha(alfa numéricos (apresentar um campo com: senha baixa, média e alta complexidade).)
   - [x] Criptografar a nova senha antes de salvar

- [ ] Esqueci minha senha
    - [ ] Enviar por email uma senha novamente, sem limite de tempo. A senha não pode ser igual a anterior
    - [ ] O sistema deverá expirar a senha depois de X tempo: não poderá ser a mesma senha anterior (hash identifica) o sistema deve apresentar campos "Senha atual" "Nova senha" e confirme [Nova Senha] Atenção: Todas as alterações que ocorrem no banco de dados, deverão ser mostradas, ao professor durante a apresentação
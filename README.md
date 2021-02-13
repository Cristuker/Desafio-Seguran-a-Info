# Desafio-Seguran-a-Info
Projeto para a aula de Segurança de Informação

### Requerimentos

[] - Autenticação - o sistema após receber o pré-cadastro, deverá enviar através de e-mail o link para o primeiro acesso (identificação) escolhida com a senha (autenticação). Atenção esta senha deverá ser criada pelo próprio sistema de forma randômica. O acesso deve ser realizado em X tempo caso contrário o login e senha serão cancelados.

[] - O usuário deverá inserir nova senha de acesso, sendo que ao salvar a senha de acesso está deverá ter caracteres numéricos e alfa numéricos (apresentar um campo com: senha baixa, média e alta complexidade).

[] - A senha dever ser criptografada ( pesquisar qual algoritmo de hash confiável) e ser apresentada ao professor em tempo real.

[] - Esquecimento de senha: enviar por e-mail e novamente inicia o mesmo processo de senha pela primeira vez, porém o login desta vez não será cancelado. Neste processo o sistema não deverá permitir o uso da senha anterior. 


[] - O sistema deverá expirar a senha depois de X tempo: não poderá ser a mesma senha anterior (hash identifica) o sistema deve apresentar campos "Senha atual" "Nova senha" e confirme [Nova Senha]
Atenção: Todas as alterações que ocorrem no banco de dados, deverão ser mostradas, ao professor durante a apresentação

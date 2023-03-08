describe('API de usuários', () => {

  context('Método GET', () => {
    it('Listar todos os usuários', () => {
      cy.request({
        method: 'GET',
        url: 'users'
      }).then( response => {
        expect(response.status).eq(200)
      })
    })

    it('Listar usuário específico', () => {
      cy.request({
        method: 'GET',
        url: 'users/1'
      }).then( response => {
        expect(response.status).eq(200)
        expect(response.body.id).eq(1)
      })
    })
  })
})
describe('API de posts', () => {

    context('Método GET', () => {
      it('Listar todos os posts', () => {
        cy.request({
          method: 'GET',
          url: 'posts'
        }).then( response => {
          expect(response.status).eq(200)
        })
      })
  
      it('Listar posts de um usuário específico', () => {
        cy.request({
          method: 'GET',
          url: 'posts/1'
        }).then( response => {
          expect(response.status).eq(200)
          expect(response.body.userId).eq(1)
        })
      })
    })
  })
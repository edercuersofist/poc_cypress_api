describe('API de comentários', () => {

    context('Método GET', () => {
      it('Listar todos os comentários', () => {
        cy.request({
          method: 'GET',
          url: 'comments'
        }).then( response => {
          expect(response.status).eq(200)
        })
      })
  
      it('Listar comentário de um post específico', () => {
        cy.request({
          method: 'GET',
          url: 'comments/1'
        }).then( response => {
          expect(response.status).eq(200)
          expect(response.body.postId).eq(1)
        })
      })
    })
  })
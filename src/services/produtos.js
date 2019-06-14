import { http } from './config'

export default	{

	salvar:(produto)=>{
		return http.post('produto',produto);
  },
    
	atualizar:(produto)=>{
		return http.put('produto',produto);
  },

  listar:()=>{
		return http.get('5d0236cd3100002a00ab2d9d')
  },
    
	apagar:(produto)=>{
		return http.delete('produto', { data: produto })
	}
}

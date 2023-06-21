const CPFMask = (value: string) => {
  return value
    .replace(/\D/g, '')                   // Remove tudo que nao for numeros
    .replace(/(\d{3})(\d)/, '$1.$2')      // Busca a primeira ocorrencia de 000 0 e substitui por 000.0
    .replace(/(\d{3})(\d)/, '$1.$2')      // Busca a primeira ocorrencia de 000 0 e substitui por 000.0
    .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Busca a primeira ocorrencia de 000 0/000 00 e substitui por 000-0/000-00
    .replace(/(-\d{2})\d+?$/, '$1');      // Busca a primeira ocorrencia de -00 0 e substitui por -00 (somente CPF)
}

const CNPJMask = (value: string) => {
  return value
    .replace(/\D/g, '')                   // Remove tudo que nao for numeros
    .replace(/(\d{2})(\d)/, '$1.$2')      // Busca a primeira ocorrencia de 00 0 e substitui por 00.0
    .replace(/(\d{3})(\d)/, '$1.$2')      // Busca a primeira ocorrencia de 000 0 e substitui por 000.0
    .replace(/(\d{3})(\d)/, '$1/$2')      // Busca a primeira ocorrencia de 000 0 e substitui por 000.0
    .replace(/(\d{4})(\d{1,2})/, '$1-$2') // Busca a primeira ocorrencia de 0000 0/0000 00 e substitui por 0000-0 ou 0000-00
    .replace(/(-\d{2})\d+?$/, '$1');      // Busca a primeira ocorrencia de -00 0 e substitui por -00
}

const CPFCNPJMask = (value: string) => {
  value = value.replace(/\D/g, '');
  if(value.length < 12){ // Abaixo de 12 digitos = CPF
    return CPFMask(value);
  }
  return CNPJMask(value);
}

export {
  CPFMask,
  CNPJMask,
  CPFCNPJMask
}
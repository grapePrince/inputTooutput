// 제공된 함수
export const sliceSplitOrderWorkerNumber = (worker: string = '') => {
    if (!worker) return '';
  
    return worker
      .replace(/\s/g, '') // 공백 제거
      .split(' ')
      .map((t) => {
        // PDA가 있는 경우 앞 글자 제거하고 'P' 뒤에 있는 글자만 채택
        if (t.includes('PDA')) {
          return `P${t.replace(/^.*PDA/, '').slice(-2)}`;
        }
        // 6글자 이상일 경우 P + 맨 뒤 두 글자
        return `P${t.slice(-2)}`;
      })
      .join(' ');
  };
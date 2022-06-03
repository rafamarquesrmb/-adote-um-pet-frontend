export const TextService = {
    text_limit(text: string, max_textsize: number) : string{
        if(text.length < max_textsize){
            return text;
        }
        return text.slice(0,max_textsize)+'...';
    }
}
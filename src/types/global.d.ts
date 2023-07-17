export {};

declare global {
    interface ClickFunction {
        onClick?: (params: any) => void
    }
    interface SearchResult {
        duration_ms?: number;
        name?: string | undefined;
        album?: any;
        preview_url?: any;
        artists?: any;
        id?: Key | null | undefined;
        data: {
            [x: string]: any,
            name?: string,
            images?: Array<Images>,
            album?: Array<Images>,
            artists?: Array<Artists>,
            type?: string,
            external_urls?: {
                spotify: string
            }
        }
      
      }
      
      type Artists = {
        name: string,
        id: string,
        external_urls: {
          spotify: string
        }
      }
      type Images = {
        url: string
      }
}
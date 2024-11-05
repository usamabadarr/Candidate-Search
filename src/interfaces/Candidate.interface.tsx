// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    id: number;           
    login: string;          
    name?: string;          
    avatar_url: string;      
    location?: string;       
    email?: string | null;    
    html_url: string;         
    company?: string;         
  }
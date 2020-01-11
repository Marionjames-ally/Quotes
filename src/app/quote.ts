export class Quote {
    showDescription: boolean;
    static: {true: any};
    constructor(
        public name: string,
        public Quote: string,
        public author: string,
        public postDate: Date,
        public upVote: number,
        public downVote: number,
 ){    
        this.showDescription= false;
    }
}

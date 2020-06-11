const Required = (item: any, name: string, place: string) => {
    if (item === undefined) {
        throw new Error('The item: `' + name + '` is required in `' + place + '`, but is not set!');
    }
}

export default Required;

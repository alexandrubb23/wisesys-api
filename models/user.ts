class User {
  public id: number;

  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string
  ) {
    this.id = Date.now();
  }
}

export default User;

class a {
    private b = 1;
    public c = 10;
    private x (y = 1) {
        return y+1;
    }
    public y (z = 1) {
        return this.x(z);
    }
}

let x = new a();

x.y(2);
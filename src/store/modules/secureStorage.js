import SecureLS from "secure-ls";
var ls = new SecureLS({
    isCompression: false
});
export default {
    storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
    },
}
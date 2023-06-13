function solution(spell, dic) {
    var answer = 0;
    let sortSpell = spell.sort().join("");
    return dic.map(d => d.split("").sort().join("")).find(d => d===sortSpell) !== undefined ? 1 : 2
}


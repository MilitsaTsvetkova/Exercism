export const translate = (rna = '') => {

    if (rna === '') {
        return []
    };

    const codons = rna.match(/[A-Z]{1,3}/g);
    const proteins = [];

    for (let codon of codons) {
        let protein = getProtein(codon)
        if (protein === 'STOP') {
            break;
        }

        proteins.push(protein);
    }

    return proteins;
}

const getProtein = (codon) => {
    if (codon === null) return 'STOP';

    const proteins = {
        AUG: "Methionine",
        UUU: "Phenylalanine",
        UUC: "Phenylalanine",
        UUA: "Leucine",
        UUG: "Leucine",
        UCU: "Serine",
        UCC: "Serine",
        UCA: "Serine",
        UCG: "Serine",
        UAU: "Tyrosine",
        UAC: "Tyrosine",
        UGU: "Cysteine",
        UGC: "Cysteine",
        UGG: "Tryptophan",
        UAA: "STOP",
        UAG: "STOP",
        UGA: "STOP"
    };
    if (codon.length < 3 || proteins[codon] === undefined) {
        throw new Error('Invalid codon')
    }
    return proteins[codon]
}
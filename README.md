# Harmonic Minor Trainer

Part of [Fretworks](https://fretworks.vercel.app) — live at
[fretworks.vercel.app/harmonic-minor](https://fretworks.vercel.app/harmonic-minor/).

Learn harmonic minor — natural minor with a raised 7th — in five CAGED shapes,
three-notes-per-string and the full neck; its seven modes (Phrygian dominant
among them) and the seven chords of the key, V7 included; and where it differs
from natural and melodic minor. Spaced-repetition practice with shape,
raised-7th and mode drills.

Shares its code with [Natural Minor Trainer](https://github.com/SyncopatedSyntax/NaturalMinorTrainer)
— only `src/scale.js` differs.

```
npm install
npm run dev      # http://localhost:5189/harmonic-minor/
npm run verify   # correctness gate — every shape re-derived from first principles
npm run build
```

See `CLAUDE.md` for how it is built and why.

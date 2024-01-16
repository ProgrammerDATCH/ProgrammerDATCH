# ProgrammerDATCH

**ProgrammerDATCH**: *Apply complicated algorithm to get eazy life.*

<p align="center">
  <img src="https://programmerdatch.000webhostapp.com/img/pro.png" alt="ProgrammerDATCH" width="100" height="100">
</p>

> "Are you delighted that all my stuff are scrumptious?"

---

```
class Programmer {
    constructor(skills) {
      this.skills = new Map(skills);
      this.technologies = ['ReactJs', 'ReactNative', 'NodeJs', 'PostgreSQL', 'Firebase'];
    }
  
    getTechnologies() {
      return this.technologies;
    }
  
    getSkills() {
      return this.skills;
    }
  }
  
  const programmerDATCH = new Programmer([
    ['HTML', 'Advanced'],
    ['CSS', 'Advanced'],
    ['JS', 'Advanced'],
    ['PHP', 'Advanced'],
    ['JAVA', 'Intermediate'],
    ['C', 'Advanced'],
    ['C++', 'Advanced'],
    ['MQL5', 'Advanced'],
  ]);
  
  const technologies = programmerDATCH.getTechnologies();
  const skills = programmerDATCH.getSkills();
  
  console.log('Technologies:');
  technologies.forEach((technology) => {
    console.log(`- ${technology}`);
  });
  
  console.log('Skills:');
  skills.forEach((level, skill) => {
    console.log(`- ${skill}: ${level}`);
  });  
```

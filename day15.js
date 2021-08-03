//output 15
//[10 , 15 , 20];

const minClimbingStair = (cost) => {
  let a = 0,
    b = 0;

  for (let i = 2; i < cost.length + 1; i++) {
    const temp = a;
    a = Math.min(a + cost[i - 1], b + cost[i - 2]);
    b = temp;
  }
  return a;
};

// console.log(minClimbingStair([10, 15, 20]));

const largeGroupPositions = (s) => {
  // const length = s.length;
  // const set = [];
  // let j = 0;
  // for (let i = 0; i < length; i++) {
  //   if (i === length - 1 || s[i] !== s[i + 1]) {
  //     if (i - j + 1 >= 3) {
  //       set.push([j, i]);
  //     }
  //     j = i + 1;
  //   }
  // }
  // return set;

  const length = s.length;
  const set = [];
  let j = 0;
  for (let i = 0; i < length; i++) {
    if ((i === length - 1, s[i] !== s[i + 1])) {
      if (i - j + 1 >= 3) {
        set.push([i, j]);
      }
      j = i + 1;
    }
  }
  return set;
};

// console.log(largeGroupPositions("abcdddeeeeaabbbcd"));

const subdomainVisits = (ss) => {
  const domainMap = {};

  ss.forEach((cp) => {
    let [visited, domain] = cp.split(" ");
    const domains = [];

    let dot = domain.indexOf(".");

    while (dot > -1) {
      domains.push(domain);
      domain = domain.slice(dot + 1, domain.length);
      dot = domain.indexOf(".");
    }

    domains.push(domain);

    domains.forEach((domain) => {
      if (!domainMap[domain]) {
        domainMap[domain] = 0;
      }
      domainMap[domain] += parseInt(visited);
    });
  });

  const values = [];

  for (let key in domainMap) {
    values.push(`${domainMap[key]} ${key}`);
  }

  return values;
};

// console.log(
//   subdomainVisits([
//     "900 google.mail.com",
//     "50 yahoo.com",
//     "1 intel.mail.com",
//     "5 wiki.org",
//   ])
// );
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter() {
    return 2 * Math.PI * this.radius;
  },
};

      const data = [
        {
          name: "Igor",
          marks: [2, 5, 2, 8]
        },
        {
          name: "Mihaile",
          marks: [5, 5, 10, 6, 5, 4]
        },
        {
          name: "Sergiu",
          marks: [5, 5, 10, 6, 5, 4]
        },
        {
          name: "Natalia",
          marks: [2, 6, 7, 1]
        },
        {
          name: "Veronica",
          marks: [7, 5, 8, 10, 9]
        }
      ];

      function calculateAverageMarks(pupils) {
        const result = pupils.map(function (pupil) {
          return {
            name: pupil.name,
            average: pupil.marks.reduce((p, c) => p + c, 0) / pupil.marks.length
          };
        });

        return result;
      }

      function getPupilsWithLessThanFive(pupils) {
        const averages = calculateAverageMarks(pupils);
        return averages.filter((averageData) => averageData.average < 5);
      }

      function sortByAverageMarkDesc(pupils) {
        const averages = calculateAverageMarks(pupils);
        return averages.sort((a, b) => {
          if (a.average < a.average) {
            return 1;
          }
          return -1;
        });
      }

      function getPupilsWithHigherThanAverage(pupils) {
        const averages = calculateAverageMarks(pupils);
        const averageClassMark =
          averages.map((av) => av.average).reduce((p, c) => p + c, 0) /
          averages.length;
        return averages.filter(
          (averageData) => averageData.average > averageClassMark
        );
      }

      const averageMarks = calculateAverageMarks(data);

      document.getElementById("d1").innerText = `Note medii:\n
        ${averageMarks
          .map((am) => `${am.name}: ${am.average.toFixed(2)}\n`)
          .join("")}
      \n\n`;

      const lowPerformers = getPupilsWithLessThanFive(data);
      document.getElementById("d2").innerText = `Note mai mici ca cinci:\n
        ${lowPerformers
          .map((am) => `${am.name}: ${am.average.toFixed(2)}\n`)
          .join("")}
      \n\n`;

      const sorted = sortByAverageMarkDesc(data);

      document.getElementById("d3").innerText = `Sortat desc:\n
        ${sorted.map((am) => `${am.name}: ${am.average.toFixed(2)}\n`).join("")}
      \n\n`;

      document.getElementById("d4").innerText = `Cea mai mare: ${
        sorted[0].name
      }: ${sorted[0].average.toFixed(2)}
      
      Cea mai mica: ${sorted[sorted.length - 1].name}: ${sorted[
        sorted.length - 1
      ].average.toFixed(2)}
      `;

      const best = getPupilsWithHigherThanAverage(data);
      document.getElementById("d5").innerText = `Mai mare ca media:\n
        ${best.map((am) => `${am.name}: ${am.average.toFixed(2)}\n`).join("")}
      \n\n`;
   



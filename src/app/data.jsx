const Colleges = [
    {
        name: "Galgotia's University",
        location: 'Greater Noida, Uttar Pradesh',
        students: 25478,
        logo: '/assets/gu.png',
        invited: false,
        strength_on_abekus : 12345,
        students_hired : 400,
        attempted_questions : [200, 260, 300, 280, 310, null, null, null, null, null, null, null],
        projected_attempted_questions : [null, null, null, null, 310, 305, 290, 330, 350, 360, 420, 480],
        accuracy : [56, 60, 62, 59, 63, null, null,null, null, null, null, null],
        projected_accuracy : [null, null, null, null, 63, 64, 65, 62, 61, 59,61, 69]
    },
    {
        name: 'IIT, Roorkee',
        location: 'Greater Noida, Uttar Pradesh',
        students: 62478,
        logo: '/assets/iitr.png',
        invited: true,
        strength_on_abekus : 12511,
        students_hired : 380,
        attempted_questions : [180, 240, 230, 270, 300, null, null, null, null, null, null, null],
        projected_attempted_questions : [null, null, null, null, 300, 315, 300, 310, 350, 370, 420, 480],
        accuracy : [49, 50, 52, 59, 63, null, null,null, null, null, null, null],
        projected_accuracy : [null, null, null, null, 63, 64, 55, 42, 71, 49,61, 69]
    },
    {
        name: 'IIT, Bombay',
        location: 'Greater Noida, Uttar Pradesh',
        students: 15478,
        logo: '/assets/iitb.png',
        invited: false,
        strength_on_abekus : 12321,
        students_hired : 420,
        attempted_questions : [220, 280, 310, 260, 350, null, null, null, null, null, null, null],
        projected_attempted_questions : [null, null, null, null, 350, 355, 280, 340, 350, 390, 420, 500],
        accuracy : [56, 60, 40, 44, 46, null, null,null, null, null, null, null],
        projected_accuracy : [null, null, null, null, 46, 56, 66, 69, 50, 59,61, 69]
    },
  ];

// Dummy data for each skill with distribution across 10 levels
const skillsData = [
    { skillName: 'HTML & CSS', accuracy: 83, totalSolved: 48775, totalStudents: 457, levelDistribution: [70, 60, 80, 50, 45, 40, 30, 25, 20] },
    { skillName: 'JavaScript', accuracy: 75, totalSolved: 38200, totalStudents: 365, levelDistribution: [60, 55, 70, 40, 35, 30, 20, 15, 10] },
    { skillName: 'React', accuracy: 80, totalSolved: 40500, totalStudents: 320, levelDistribution: [50, 50, 60, 30, 25, 20, 15, 10, 8] },
    { skillName: 'Node.js', accuracy: 78, totalSolved: 33200, totalStudents: 275, levelDistribution: [40, 45, 50, 25, 20, 15, 10, 8, 5] },
    { skillName: 'Python', accuracy: 85, totalSolved: 51200, totalStudents: 510, levelDistribution: [80, 70, 90, 55, 50, 45, 35, 30, 25] },
    { skillName: 'SQL', accuracy: 82, totalSolved: 39000, totalStudents: 390, levelDistribution: [65, 60, 75, 35, 30, 25, 20, 18, 12] },
];

module.exports = {Colleges, skillsData}
import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { Row, Col } from "react-bootstrap";

function Github() {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Nsanjayboruds")
      .then((response) => response.json())
      .then((data) => setGithubData(data))
      .catch((error) => console.error("Error fetching GitHub data:", error));
  }, []);

  return (
    <div className="github-section px-4 md:px-10 py-10">
      <Row className="justify-content-center text-center mb-8">
        <Col>
          <h2 className=" text-[blue] text-3xl md:text-4xl font-bold mb-4">
            My Coding{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Activity
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tracking my journey through commits, contributions, and consistent
            coding practice
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center mb-10">
        <Col xs={12} className="text-center">
          <div className="github-calendar-container bg-white backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700/50">
            <GitHubCalendar
              username="Nsanjayboruds"
              blockSize={14}
              blockMargin={5}
              fontSize={14}
              theme={{
                level0: "#161b22",
                level1: "#d1fae5",
                level2: "#a7f3d0",
                level3: "#6ee7b7",
                level4: "#34d399",
              }}
              style={{ margin: "0 auto", fontFamily: "inherit" }}
              renderBlock={(block, activity) =>
                React.cloneElement(block, {
                  "data-tip": activity.count
                    ? `${activity.count} contributions on ${activity.date}`
                    : "No contributions",
                })
              }
            />
            <ReactTooltip />
            <div className="flex justify-between items-center mt-4 text-sm text-gray-300">
              <span>Less</span>
              <span className="text-emerald-300">
                430 contributions in the last year
              </span>
              <span>More</span>
            </div>
            <div className="mt-2 text-xs text-emerald-200">
              Hover over squares to see contribution details
            </div>
          </div>
        </Col>
      </Row>

      {githubData && (
        <Row className="justify-content-center stats-row">
          <Col md={8} className="text-center">
            <div className="github-stats bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">
                GitHub Profile Stats
              </h3>
              <Row className="justify-content-center">
                {[
                  { label: "Public Repos", value: githubData.public_repos },
                  { label: "Followers", value: githubData.followers },
                  { label: "Following", value: githubData.following },
                  { label: "Gists", value: githubData.public_gists },
                ].map((stat, index) => (
                  <Col xs={6} sm={3} className="mb-4" key={index}>
                    <div className="stat-box p-3 rounded-lg bg-gray-900/50">
                      <div className="text-2xl font-bold text-purple-400">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </Col>
                ))}
              </Row>
              <a
                href={`https://github.com/${githubData.login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                View My GitHub Profile
              </a>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Github;

import { Illustration } from "./illustration";
import { Footer } from "./footer";

export function PageData({ data }: { data: any }) {
  const date = new Date().toISOString();
  return (
    <>
      <main>
        <a
          target="_blank"
          href="https://chatg.pt/weather"
          rel="noreferrer"
          className="pill"
        >
          List Of Staking Wiki
        </a>
        <h1>Staking Wiki</h1>
        <p className="description">
        Staking Is a Way of Earning Rewards for Holding Cryptocurrencies.
        </p>
        <Illustration />
        <div className="meta">
          <div className="info">
            <span>Your Location</span>
            <span className="region">
              <strong>{data.location.name}</strong>
            </span>
          </div>
          <div className="info">
            <span>Current Temperature</span>
            <strong>
              {data.current.temp_c}°C / {data.current.temp_f}°F
            </strong>
          </div>
        </div>
      </main>

      <Footer>
        <p>
          {} {" "}
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            
          </a>
        </p>
      </Footer>
    </>
  );
}

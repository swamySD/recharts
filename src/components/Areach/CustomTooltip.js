const CustomTooltip = ({ active, payload, label }) => {
    const dateRange = `${label} 01 - ${label} 31, 2022`;
  
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${dateRange}`}</p>
          {Object.entries(payload[0]?.payload || {}).map(([key, value], index) => {
            if (key !== 'name') {
              return (
                <p key={index} style={{ color: value.color }}>
                  {`${key}:           ${value.days}`}
                </p>
              //    <p key={index} style={{ color: value.color }}>
              //    {`${key}: ${value.value} (Days: ${value.days})`}
              //  </p>
              );
            }
            return null;
          })}
        </div>
      );
    }
  
    return null;
  };

  export default CustomTooltip
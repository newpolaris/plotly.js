// [OneWeek]
function uniformSampleSphere(r1, r2)
{
    var z = 1 - 2*r2;
    var phi = 2*Math.PI*r1;
    var r = Math.sqrt(1 - z*z);
    var x = Math.cos(phi) * r;
    var y = Math.sin(phi) * r;
    return [x, y, z];
}

// cosine weighted sphere abs(cos(theta))
function cosineSampleSphere(r1, r2)
{
    var v = 1 - 2*r2;
    var z = Math.sign(v) * Math.sqrt(Math.abs(v));
    var phi = 2*Math.PI*r1;
    var r = Math.sqrt(1 - z*z);
    var x = Math.cos(phi) * r;
    var y = Math.sin(phi) * r;
    return [x, y, z];
}

// https://qiita.com/mebiusbox2/items/5a388ef4d5089568a529
function uniformSampleHemisphere(r1, r2)
{
    var z = 1 - r2;
    var phi = 2*Math.PI*r1;
    var r = Math.sqrt(r2 * (2 - r2));
    var x = Math.cos(phi) * r;
    var y = Math.sin(phi) * r;
    return [x, y, z];
}

// [PBRT]
function cosWeightedSample(r1, r2)
{
    var x = Math.cos(2*Math.PI*r1) * Math.sqrt(r2);
    var y = Math.sin(2*Math.PI*r1) * Math.sqrt(r2);
    var z = Math.sqrt(1 - r2);
    return [x, y, z];
}

// [PBRT]
function uniformSampleDist(x, y)
{
    var r = Math.sqrt(x);
    var theta = 2 * Math.PI * y;
    return [r * Math.cos(theta), r * Math.sin(theta)];
}

// [PBRT]
function concentricSampleDisk(x, y)
{
    var uOffset = [x, y].map(x => 2*x - 1);
    if (uOffset[0] == 0 && uOffset[1] == 0)
        return [0, 0];
    var theta, r;
    if (Math.abs(uOffset[0]) > Math.abs(uOffset[1]))
    {
        r = uOffset[0];
        theta = Math.PI/4 * (uOffset[1] / uOffset[0]);
    }
    else
    {
        r = uOffset[1];
        theta = Math.PI/2 - Math.PI/4 * (uOffset[0] / uOffset[1]);
    }
    return [Math.cos(theta), Math.sin(theta)].map(x => r*x);
}

// [PBRT] concentricSampleDisk
function cosineSampleHemisphere(u1, u2)
{
    var d = concentricSampleDisk(u1, u2);
    var z = Math.sqrt(Math.max(0, 1 - d[0]*d[0] - d[1]*d[1]));
    return [d[0], d[1], z];
}

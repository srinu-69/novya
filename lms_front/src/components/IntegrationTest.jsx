import React, { useState } from 'react';
import { runAllTests, testApiConnectivity } from '../utils/testIntegration';

const IntegrationTest = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [testResults, setTestResults] = useState(null);
    const [logs, setLogs] = useState([]);

    const addLog = (message) => {
        setLogs(prev => [...prev, { timestamp: new Date().toLocaleTimeString(), message }]);
    };

    const runTests = async () => {
        setIsRunning(true);
        setLogs([]);
        setTestResults(null);

        addLog('Starting integration tests...');

        try {
            // Override console.log to capture test output
            const originalLog = console.log;
            console.log = (...args) => {
                addLog(args.join(' '));
                originalLog(...args);
            };

            const results = await runAllTests();
            setTestResults(results);

            // Restore console.log
            console.log = originalLog;

            addLog('Integration tests completed!');
        } catch (error) {
            addLog(`Error running tests: ${error.message}`);
        } finally {
            setIsRunning(false);
        }
    };

    const testConnectivity = async () => {
        setIsRunning(true);
        setLogs([]);

        addLog('Testing API connectivity...');

        try {
            const isConnected = await testApiConnectivity();
            addLog(`API Connectivity: ${isConnected ? 'SUCCESS' : 'FAILED'}`);
        } catch (error) {
            addLog(`Error: ${error.message}`);
        } finally {
            setIsRunning(false);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>🔧 NOVYA LMS Integration Tests</h1>

            <div style={{ marginBottom: '20px' }}>
                <button
                    onClick={runTests}
                    disabled={isRunning}
                    style={{
                        padding: '10px 20px',
                        marginRight: '10px',
                        backgroundColor: '#2D5D7B',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: isRunning ? 'not-allowed' : 'pointer'
                    }}
                >
                    {isRunning ? 'Running Tests...' : 'Run All Tests'}
                </button>

                <button
                    onClick={testConnectivity}
                    disabled={isRunning}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#A62D69',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: isRunning ? 'not-allowed' : 'pointer'
                    }}
                >
                    Test Connectivity Only
                </button>
            </div>

            {testResults && (
                <div style={{
                    marginBottom: '20px',
                    padding: '15px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '5px',
                    border: '1px solid #dee2e6'
                }}>
                    <h3>📊 Test Results Summary</h3>
                    <p><strong>Total Tests:</strong> {testResults.total}</p>
                    <p><strong>Passed:</strong> <span style={{ color: 'green' }}>{testResults.passed}</span></p>
                    <p><strong>Failed:</strong> <span style={{ color: 'red' }}>{testResults.failed}</span></p>
                    <p><strong>Success Rate:</strong> {((testResults.passed / testResults.total) * 100).toFixed(1)}%</p>

                    {testResults.failed > 0 && (
                        <div style={{ marginTop: '10px' }}>
                            <h4>❌ Failed Tests:</h4>
                            <ul>
                                {testResults.details
                                    .filter(test => !test.passed)
                                    .map((test, index) => (
                                        <li key={index} style={{ color: 'red' }}>
                                            {test.testName}: {test.message}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            {logs.length > 0 && (
                <div style={{
                    backgroundColor: '#000',
                    color: '#0f0',
                    padding: '15px',
                    borderRadius: '5px',
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    maxHeight: '400px',
                    overflowY: 'auto'
                }}>
                    <h3 style={{ color: '#fff', marginTop: 0 }}>📝 Test Logs</h3>
                    {logs.map((log, index) => (
                        <div key={index} style={{ marginBottom: '2px' }}>
                            <span style={{ color: '#888' }}>[{log.timestamp}]</span> {log.message}
                        </div>
                    ))}
                </div>
            )}

            <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
                <h3>ℹ️ Test Information</h3>
                <ul>
                    <li>These tests verify the connection between the frontend and Django backend</li>
                    <li>Tests check API endpoints, authentication, CORS, and data flow</li>
                    <li>Backend should be running on <code>http://localhost:8000</code></li>
                    <li>Frontend should be running on <code>http://localhost:3000</code></li>
                </ul>
            </div>
        </div>
    );
};

export default IntegrationTest;
